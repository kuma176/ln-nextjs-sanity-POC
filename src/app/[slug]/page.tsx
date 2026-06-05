import { PortableText, type SanityDocument } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Heading from "@/components/blocks/heading/heading";
import Preheader from "@/components/blocks/preheader/preheader";
import BodyText from "@/components/blocks/body-text/body-text";
import HeadingBlock from "@/components/blocks/heading-block/heading-block";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  // const postImageUrl = post.image
  //   ? urlFor(post.image)?.width(550).height(310).url()
  //   : null;

  return (
    <main className="container gap-padding">
      {/* {JSON.stringify(post)} */}
      <Link href="/" className="block mb-4 hover:underline">
        ← Back to posts
      </Link>
      {/* {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )} */}
      {post.imageurl && (
        <div className="media mb-4">
          <img
            src={post.imageurl}
            alt={post.title} />
        </div>
      )}

      <HeadingBlock 
            preheader={{content: new Date(post.publishedAt).toLocaleDateString("en-US", {  year: "numeric",  month: "long",  day: "numeric"})}}
            heading={{tag: "h3", content: post.title, variant: "primary"}}
            bodyText={{tag: "div", children: Array.isArray(post.body) ? <PortableText value={post.body} /> : null }}
      >
      </HeadingBlock>

    </main>
  );
}