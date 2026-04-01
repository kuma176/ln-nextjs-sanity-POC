import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tzn09gg2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});