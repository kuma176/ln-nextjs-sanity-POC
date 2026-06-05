import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true";

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing Sanity environment variables");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});