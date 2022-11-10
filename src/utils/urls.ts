export const getGithubURL = (url: string, type: "tree" | "commits" = "tree") =>
    `https://github.com/jqhoogland/aligning-ai/${type}/main/src/pages${url}`;