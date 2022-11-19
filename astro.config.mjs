import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkDirectiveRehype from "remark-directive-rehype";
import { citePlugin as remarkCite } from "@benrbray/remark-cite";
import { remarkBibliography } from "remark-preset-obsidian";
import remarkGfm from "remark-gfm";
import mdx from "@astrojs/mdx";

console.log(remarkBibliography)

// https://astro.build/config
export default defineConfig({
  site: "https://agi-curriculum.vercel.app",
  integrations: [tailwind(), mdx()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkDirective,
      remarkDirectiveRehype,
      [remarkCite, {
        syntax: {
          // see micromark-extension-cite
          enableAltSyntax: false,
          enablePandocSyntax: true,
        },
        toMarkdown: {
          // see mdast-util-cite
          standardizeAltSyntax: false,
          enableAuthorSuppression: true,
          useNodeValue: false
        }
      },
    ], 
      [remarkBibliography, {
        bibliography: []
      }],
    ],
    rehypePlugins: [[rehypeKatex, {
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
        "\\t": "\\htmlId{eq:#1}{#2} \\tag{#1}"
      },
      trust: true
    },    
    ]]
  }
});