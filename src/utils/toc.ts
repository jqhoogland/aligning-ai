import { MarkdownHeading, MDXInstance } from "astro";

export function getHeadings(page: MDXInstance<Record<string, any>>): MarkdownHeading[] {
    return page.getHeadings()
                .filter((heading) => heading.depth === 1 && heading.text.match(/^\d+\.\d+ .+/))
                .map((heading) => ({
                        ...heading,
                        text: heading.text.replace(/^\d+\.\d+\s+/, ""),
                }))
}