import { defineCollection } from "astro:content";

const blog = defineCollection({ type: "content" });
const projects = defineCollection({ type: "content" });

export const collections = { blog, projects };
