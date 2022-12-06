const data = await Deno.readTextFile("./input.txt");

const lines: string[] = data.split("\n");
const calories: number[] = [];
let count = 0;

for (let line = 0; line < lines.length; line += 1) {
  const item = lines[line];

  if (item === "") {
    calories.push(count);
    count = 0;
  } else {
    count += parseInt(item, 10);
  }
}

const maxCalories = Math.max(...calories);
console.log("🚀 ~ file: index.ts:19 ~ maxCalories", maxCalories);

const ordered = calories.sort((a, b) => b - a);
const topThree = ordered[0] + ordered[1] + ordered[2];
console.log("🚀 ~ file: index.ts:25 ~ topThree", topThree);
