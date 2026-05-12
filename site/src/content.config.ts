import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Single source of truth for repository docs: the site reads ../docs/**/*.md
// directly. No copies, no sync — every doc change re-renders here on rebuild.
const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "../docs" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { docs };
