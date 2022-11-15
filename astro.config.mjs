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
    rehypePlugins: [
      [rehypeKatex, {
        macros: {
          "\\RR": "\\mathbb{R}",
          "\\ZZ": "\\mathbb{Z}",
          "\\CC": "\\mathbb{C}",
          "\\QQ": "\\mathbb{Q}",
          "\\NN": "\\mathbb{N}",
          "\\FF": "\\mathbb{F}",
          "\\FF": "\\mathbb{F}",
          "\\B": "\\boldsymbol{#1}",
          "\\b": "\\mathbf{#1}",
          "\\id": "\\htmlId{eq:#1}{#2}",
          "\\t": "\\htmlId{eq:#1}{#2} \\tag{#1}",
        },
        trust: true,
      }]
    ],
  }
});
