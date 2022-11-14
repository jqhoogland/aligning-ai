import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://agi-curriculum.vercel.app",
  integrations: [
    tailwind()
  ],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkDirective,
      remarkDirectiveRehype
    ],
    rehypePlugins: [rehypeKatex],
  }
});
