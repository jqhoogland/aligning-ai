import config from '../../astro.config.mjs';

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
    url={${config.site}${citation.url}}
}`.trim();
}