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
import svelte from "@astrojs/svelte";
import remarkSmartypants from "remark-smartypants";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import {visit} from "unist-util-visit";
import { getReferences, extractCitations } from "remark-preset-obsidian";
import bibliography from "./public/bibliography.json";

// https://astro.build/config
export default defineConfig({
  site: "https://agi-curriculum.vercel.app",
  integrations: [tailwind(), mdx(), svelte()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
      remarkSmartypants,
      remarkGfm,
      remarkMath,
      remarkDirective,
      remarkDirectiveRehype,
      [remarkCite, {
        syntax: {
          // see micromark-extension-cite
          enableAltSyntax: false,
          enablePandocSyntax: true
        },
        toMarkdown: {
          // see mdast-util-cite
          standardizeAltSyntax: false,
          enableAuthorSuppression: true,
          useNodeValue: false
        }
      }],
      [remarkBibliography, {
        bibliography: []
      }]
    ],
    rehypePlugins: [
      () => (tree) => {
        // console.log("HERE", JSON.stringify(tree, null, 2));
        const citations = extractCitations(tree);
        const references = getReferences(citations, bibliography).map(ref => ref.replace("↩️", "↩"));
        visit(tree, "yaml", (node) => {
           console.log(node);
        });
      },
      // rehypeRaw,
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
          "\\t": "\\htmlId{eq:#1}{#2} \\tag{#1}"
        },
        trust: true
      }],
    ],
  },
});