import { defineDb, defineTable, column } from "astro:db";

const Project = defineTable({
  columns: {
    name: column.text(),
    tagLine: column.text(),
    description: column.text(),
    pubDate: column.date(),
    repo: column.text(),
    slug: column.text(),
    feature: column.number({ optional: true }),
  },
});

const Blog = defineTable({
  columns: {
    title: column.text(),
    description: column.text(),
    heroImage: column.text({ optional: true }),
    pubDate: column.date(),
    updatedDate: column.date({ optional: true }),
    slug: column.text(),
    hide: column.boolean({ optional: true }),
  },
});

export default defineDb({
  tables: { Project, Blog },
});
