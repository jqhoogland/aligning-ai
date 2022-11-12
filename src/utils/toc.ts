export interface Heading {
    value: string;
    level: number
}

export const getHeadings = (doc: string) => {
    return doc.split("\n").map(line => {
        if (!line.startsWith("#")) return false;

        const [level, ...value] = line.split(" ");
        if (level !== "#".repeat(level.length)) return false;

        return {
            id: value.join("-").toLowerCase().replace(/ /g, "-"), // TODO: check
            value: value.join(" "),
            level: level.length
        }
    }).filter(h => h?.level === 1)
}