const data = await Deno.readTextFile("../input.txt");
const lines: string[] = data.split("\n");

console.log("🚀 ~ file: index.ts:4 ~ lines", lines);

const getValue = (letter: string) => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(letter)) {
    return letter.charCodeAt(0) - 96;
  }
  return letter.charCodeAt(0) - 38;
};

const items: number[] = lines.map((line) => {
  const len = line.length;
  let start = len / 2;
  const firstHalf = line.slice(0, start);
  let duplicate;

  while (duplicate === undefined) {
    if (firstHalf.includes(line[start])) {
      duplicate = line[start];
    }
    start += 1;
  }
  return getValue(duplicate);
});

console.log(items.reduce((a, b) => a + b, 0));
