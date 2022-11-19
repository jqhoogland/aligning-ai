import { citePlugin as remarkCite } from "@benrbray/remark-cite";
import remarkParse from "remark-parse";
import { extractCitations, getReferences } from "remark-preset-obsidian";
import { unified } from "unified";
import bibliography from "../../public/bibliography.json";

export interface Citation {
    title: string;
    authors: { name: string, url: string }[];
    lastUpdated: string;
    url: string; 
}

export const createBibTex = (citation: Citation) => {
    citation.lastUpdated = citation.lastUpdated || new Date().toISOString();

    const firstAuthor = citation.authors[0]?.name ?? " Aligned AI";
    const firstAuthorLastName = firstAuthor.split(' ').slice(-1)[0].toLowerCase();

    const id = `${firstAuthorLastName}${citation.lastUpdated.slice(0, 4)}`;
    const authors = citation.authors.map(author => author.name).join(' and ');
    const year = new Date(citation.lastUpdated).getFullYear();


    return `@misc{${id},
    title={${citation.title}},
    author={${authors}},
    year={${year}},
    url={${import.meta.env.SITE}${citation.url}}
}`.trim();
}


export const getCitations = (text: string): string[] => {
  const citations = extractCitations(
    unified()
      .use(remarkParse)
      .use(remarkCite, {
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
      },)
      .parse(text)
  );

  return getReferences(citations, bibliography);
}