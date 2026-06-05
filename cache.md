Let me first check the Next.js version and available docs in this project.
Let me check what caching APIs are available in the installed Next.js version.
Now I have a clear picture. Next.js 16 exports unstable_cache, revalidateTag, cacheTag, and cacheLife from next/cache. Here's the caching strategy to implement with three layers:
1.	unstable_cache — caches the Sanity fetch at the Next.js Data Cache layer with a TTL and revalidation tags
2.	generateStaticParams — pre-renders all post pages to static HTML at build time
3.	useCdn: true — uses Sanity's global CDN for faster Sanity API responses
________________________________________
1. Update src/app/[slug]/page.tsx
import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import Heading from "@/components/blocks/heading/heading";
import Preheader from "@/components/blocks/preheader/preheader";
import BodyText from "@/components/blocks/body-text/body-text";
import HeadingBlock from "@/components/blocks/heading-block/heading-block";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
const ALL_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Cached fetch — keyed per slug, tagged "posts", revalidates every hour.
// Call revalidateTag("posts") from a webhook route to invalidate on publish.
const getPost = unstable_cache(
  async (slug: string) => client.fetch<SanityDocument>(POST_QUERY, { slug }),
  ["post"],
  { revalidate: 3600, tags: ["posts"] }
);

// Pre-render every post page to static HTML at build time.
export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY);
  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <main className="container gap-padding">
      <Link href="/" className="block mb-4 hover:underline">
        ← Back to posts
      </Link>

      {post.imageurl && (
        <div className="media mb-4">
          <img src={post.imageurl} alt={post.title} />
        </div>
      )}

      <HeadingBlock
        preheader={{ content: new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) }}
        heading={{ tag: "h3", content: post.title, variant: "primary" }}
        bodyText={{ tag: "div", children: Array.isArray(post.body) ? <PortableText value={post.body} /> : null }}
      />
    </main>
  );
}	
________________________________________
2. Update src/sanity/client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tzn09gg2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production", // CDN in prod, live API in dev
});
________________________________________
3. (Optional) On-demand revalidation via Sanity webhook
Create src/app/api/revalidate/route.ts to allow Sanity to trigger cache-busting when content is published:
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("posts");
  return NextResponse.json({ revalidated: true });
}	
Add REVALIDATION_SECRET=your-secret to .env.local, then point a Sanity webhook at /api/revalidate?secret=your-secret.
________________________________________
How the layers work together
Layer	Mechanism	TTL
Sanity CDN (useCdn)
Sanity's global edge cache	~60s
Next.js Data Cache (unstable_cache)
Server-side, per-slug cache	1 hour (or webhook)
Static HTML (generateStaticParams)	Pre-built at deploy time	Until next build/revalidation

