import type { APIContext, GetStaticPathsResult } from "astro";
import { generateOpenGraphImage } from "astro-og-canvas";
import { Blog, db, isNull, ne, or } from "astro:db";

/* return a for an open-graph image for each blog post */
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await db
    .select()
    .from(Blog)
    .where(or(isNull(Blog.hide), ne(Blog.hide, true)));

  const paths = posts.map((post) => ({
    params: {
      route: `/blog/${post.slug}.png`,
    },
    props: {
      title: post.title,
      description: post.description,
      imagePath: "./public" + post.heroImage,
    },
  }));
  return paths;
}

export async function GET(ctx: APIContext): Promise<Response> {
  const { props } = ctx;

  const img = await generateOpenGraphImage({
    title: props.title,
    bgImage: { path: props.imagePath },
  });
  return new Response(img);
}
