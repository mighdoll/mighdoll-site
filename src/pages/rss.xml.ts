import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { Blog, db } from "astro:db";

const defaultSite = new URL("https://mighdoll.dev");

export async function GET(context: APIContext) {
  const posts = await db.select().from(Blog);
  return rss({
    title: "mighdoll blog",
    description: "blog posts from mighdoll.dev",
    site: context.site ?? defaultSite,

    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}
