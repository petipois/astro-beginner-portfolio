// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
    schema: z.object({
        title: z.string(),
        slug:z.string(),
        description: z.string(),
        published: z.string(),
        image:z.string(),
        author: z.string(),
        tech: z.array(z.string()),
        url: z.string()
    }),
});


// 3. Define your collection(s)
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        year: z.string(),
        image:z.string(),
        role: z.string(),
        skills: z.array(z.string()),
        website: z.string()
    }),
});
// 4. Export a single `collections` object to register your collection(s)
export const collections = { articles, projects };