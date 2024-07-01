import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerTwoslash, rendererRich } from "@shikijs/twoslash";
import ts from "typescript";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://mighdoll.dev",
  integrations: [mdx(), sitemap(), db()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
      // defaultColor: false, // sadly, doesn't work in astro
      wrap: true,
      transformers: [
        transformerTwoslash({
          renderer: rendererRich(),
          twoslashOptions: {
            compilerOptions: {
              moduleResolution: ts.ModuleResolutionKind.Bundler
            },
          },
        }),
      ],
    },
  },
});
