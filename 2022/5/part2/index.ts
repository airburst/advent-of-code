const data = await Deno.readTextFile("../input.txt");
const lines: string[] = data.split("\n");

// console.log("🚀 ~ file: index.ts:3 ~ lines", lines);

// Parse stacks
let counter = 0;
const stacks: string[][] = [];

while (lines[counter].indexOf("[") > -1) {
  const stackCount = Math.floor(lines[counter].length / 3);

  for (let s = 0; s < stackCount; s += 1) {
    if (!stacks[s]) {
      stacks[s] = [];
    }
    const letter = lines[counter].charAt(s * 4 + 1);
    if (letter !== " ") {
      stacks[s].push(letter);
    }
  }

  stacks.push();

  counter += 1;
}

// console.log(stacks);

// Parse instructions
counter += 2;
while (lines[counter]) {
  const remainder = lines[counter]
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "");

  const [amount, from, to] = remainder.split(" ").map((value) => +value);
  const cratesToMove = stacks[from - 1].splice(0, amount);

  stacks[to - 1] = [...cratesToMove, ...stacks[to - 1]];

  counter += 1;
}

// Log result: first item in each crate
const result = stacks.map((s) => s[0]).join("");
console.log("🚀 ~ file: index.ts:52 ~ result", result);
