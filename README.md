Contains the source for my personal blog: [mighdoll.dev](https://mighdoll.dev)

The site is built as a static site using Astro.
The public copy is served via Cloudflare Pages and deployed via `wrangler`.

### Development

`pnpm i` to install.

`pnpm dev` to run locally.

### Implementation Notes

#### Astro DB

- Markdown page meta data is mostly stored in astro db rather than
in page frontmatter.

  I like having all the page meta data in one place.
  And using a more standard interface to access the data is nice too.

  (The db is used only during site generation.)

#### Shiki TwoSlash

- Shiki TwoSlash is used to format and create type assisted hovers for the
  TypeScript examples.
  
  TwoSlash styling doesn't quite work out of the box,
  see global.css for tweaks for dark mode, overflow, etc.

- The blog post diagrams imitate the styling of Shiki,
  but aren't real TypeScript and style manually.

#### Link Previews

- OpenGraph images are generated for the blog pages using astro-og-canvas.
  This enables social media like mastadon to show link previews with an image.
  
#### ToDo

- add an RSS button. (There's already an RSS feed).
- 'more' buttons for projects and blog posts not featured on the home page.
- add logo
- add home page welcome pic and text
