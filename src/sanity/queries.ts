import { groq } from "next-sanity";

export const pageByLocaleAndSlugQuery = groq`
  *[
    _type == "page" &&
    locale == $country_locale &&
    slug.current == $slugPath
  ][0]{
    _id,
    title,
    locale,
    slug,
    sections[]
  }
`;