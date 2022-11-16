export interface Heading {
    value: string;
    level: number
}

export const getHeadings = (doc: string) => {
    return doc.split("\n").map(line => {
        if (!line.startsWith("#")) return false;

        const [level, ...value] = line.split(" ");
        if (level !== "#".repeat(level.length)) return false;

        const id = value.join("-").toLowerCase().replace(/ /g, "-").replace(/[\.]/, "");

        // Check if value[0] is of shape `1.2.3`
        if (value[0].split(".").every(n => !isNaN(Number(n)))) {
            value.shift();
        }          

        return {
            id,
            value: value.join(" "),
            level: level.length
        }
    }).filter(h => h?.level === 1)
}