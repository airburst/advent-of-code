const data = await Deno.readTextFile("../test.txt");
const lines: string[] = data.split("\n");

console.log("🚀 ~ file: index.ts:4 ~ lines", lines);

// const scores: number[] = lines.map((line) => {
// const itemValue = value[me];
// const outcome = getOutcome(them, me);
// return itemValue + outcome;
// });
