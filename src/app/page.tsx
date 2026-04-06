import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import HeadingBlock from "@/components/blocks/heading-block/heading-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
  ] | order(publishedAt desc)[0...12]{
  _id, 
  title, 
  "excerpt": array::join(string::split(pt::text(body), "")[0..100], "") + "...", 
  slug, 
  publishedAt,
  imageurl
  }`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="gap-padding container">
      {/* <h1>Heading one</h1>
      <h2>Heading two</h2>
      <h3>Heading three</h3>
      <h4>Heading four</h4>
      <h5>Heading five</h5>
      <h6>Heading six</h6>
      <BodyText>
        <a href='#'>Lorem ipsum dolor</a> sit amet consectetur adipisicing elit.
        Voluptas incidunt rem dolorem asperiores pariatur culpa, dolore expedita
        corporis vel eos harum. Quibusdam eum rem repudiandae maxime dolore quo,
        unde explicabo?
      </BodyText> */}

      <HeadingBlock 
      hiddenElement={{ tag: "h2", content: "Hidden heading for seo" }} 
      preheader={{content: "Preheader"}}
      heading={{tag: "p", content:"Hidden element as h2", variant: "primary"}}
      bodyText={{tag: "div", content: "Description text lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore saepe officiis, doloremque ecessitatibus id illum expedita nesciunt quos ad autem iste! Quos eligendi accusamus iusto ipsa molestiae pariatur quisquam!"}}
      >
      </HeadingBlock>

      <HeadingBlock
      className="gap-padding" 
      heading={{tag: "h2", content:"Without hidden element + no preheader", variant: "primary"}}
      bodyText={{tag: "div", content: "Description text lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore saepe officiis, doloremque ecessitatibus id illum expedita nesciunt quos ad autem iste! Quos eligendi accusamus iusto ipsa molestiae pariatur quisquam!"}}
      >
      </HeadingBlock>

      <HeadingBlock
      className="header-centered"
      preheader={{content: "Preheader"}}
      heading={{tag: "h2", content:"Heading block with centered headers", variant: "primary"}}
      bodyText={{tag: "div", content: "Description text lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore saepe officiis, doloremque ecessitatibus id illum expedita nesciunt quos ad autem iste! Quos eligendi accusamus iusto ipsa molestiae pariatur quisquam!"}}
      >
      </HeadingBlock>

      {/* <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      >
        {posts.map((post) => (
          <AccordionItem key={post._id} value={post._id}>
            <AccordionTrigger>{post.title}</AccordionTrigger>
            <AccordionContent>{post.excerpt}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion> */}

      
      {/* {JSON.stringify(posts)} */}
      
      {/* <ul className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-x-0">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block rounded-lg border border-gray-200 p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg [&:has(.cta)_.description]:mb-4 [&:not(:has(.cta))_.description]:mb-0"
              href={`/${post.slug.current}`}
            >
              <div className="-mt-6 -mr-6 mb-4 -ml-6">
                <img src={post.imageurl} alt={post.title} />
              </div>
              <p className="preheader">{new Date(post.publishedAt).toLocaleDateString("en-US", {  year: "numeric",  month: "long",  day: "numeric"})}</p>

              <Heading tag="h2" content={post.title}></Heading>
              <BodyText>{post.excerpt}</BodyText>
              <span className="cta">Click me</span>
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
