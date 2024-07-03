import { db, Project, Blog } from "astro:db";

export default async function () {
  await db.insert(Project).values([
    {
      name: "mini-parse",
      slug: "mini-parse",
      tagLine: "Small TypeScript parser combinators",
      description: oneLine(
        `A small TypeScript parser combinator library 
         with an efficient regex based lexer.`
      ),
      pubDate: new Date("Feb 8 2024"),
      repo: "https://github.com/mighdoll/wgsl-linker/tree/main/packages/mini-parse",
      feature: 2,
    },
    {
      name: "wgsl-linker",
      slug: "wgsl-linker",
      tagLine: "import & export for WebGPU shaders",
      description:
        "Enrich the WGSL shader language to support code modules via import and export statements. Linking can be done entirely at runtime.",
      pubDate: new Date("Nov 29 2023"),
      repo: "https://github.com/mighdoll/wgsl-linker/",
      feature: 1,
    },
    {
      name: "wgsl-link",
      slug: "wgsl-link",
      tagLine: "Command line linking for WebGPU",
      description:
        "A command line tool for preprocessing and linking multiple WGSL shader modules into a single WGSL module.",
      pubDate: new Date("March 24 2024"),
      repo: "https://github.com/mighdoll/wgsl-linker/tree/main/packages/cli",
      feature: 3,
    },
  ]);
  await db.insert(Blog).values([
    {
      title: "Reactive WebGPU",
      description: oneLine(
        `Fine grained reactivity (aka signals) libraries are 
        useful for WebGPU. 
        Reactivity libraries offer hooks for lazy recalculation, 
        resource reallocation, cleanup, caching, and dependency tracking.`
      ),
      pubDate: new Date("April 7 2023"),
      heroImage: "/blog-reactivity-webgpu.png",
      slug: "reactive-webgpu",
    },
    {
      title: "TypeScript Tricks for Combining Records",
      description: oneLine(
        `Use fancy TypeScript type constructors to safely work with Records. 
         Add fields to Records using mapped types. 
         Intersect Records using contravariance. 
         Recover Record types after intersection.`
      ),
      pubDate: new Date("June 21 2024"),
      updatedDate: new Date("July 2 2024"),
      heroImage: "/blog-records-cropped.webp",
      slug: "typescript-tricks-combining-records",
    },
    {
      title: "Modern Union To Intersection",
      description: oneLine(
        `Modern TypeScript enables us to build
         an improved type constructor to convert union types
         to intersection types.`
      ),
      pubDate: new Date("July 2 2024"),
      slug: "modern-typescript-intersection",
      hide: true,
    },
    {
      title: "Tagged Parser Combiniators",
      description: oneLine(
        `A 'tag' feature for parser combinators 
         makes extracting parsing results easier and more maintainable.`
      ),
      pubDate: new Date("July 27 2024"),
      hide: true,
      slug: "tagged-parser-combinators",
    },
    {
      title: "Mapped Tuple Types",
      description: `Map one TypeScript tuple type to another`,
      pubDate: new Date("August 27 2024"),
      hide: true,
      slug: "mapped-tuple-types",
    },
    {
      title: "Infer Type Parameters Implicitly",
      description: `Infer Type parameters in TypeScript without passing type parameters explicitly`,
      pubDate: new Date("September 27 2024"),
      hide: true,
      slug: "infer-type-parameters",
    },
  ]);
}

function oneLine(s: string): string {
  return s.replaceAll(/\s*\n\s*/g, " ");
}
