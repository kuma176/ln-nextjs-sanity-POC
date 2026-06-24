import { groq } from "next-sanity";

export const pageByLocaleAndSlugQuery = groq`
  *[
    _type == "page" &&
    slug.current == $slugPath
  ][0]{
    _id,
    title,
    locale,
    slug,
    sections[]
  }
`;