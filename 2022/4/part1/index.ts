const data = await Deno.readTextFile("../input.txt");
const lines: string[] = data.split("\n");

const isFullyOverlapping = (range1: string, range2: string): boolean => {
  const [start1, end1] = range1.split("-");
  const [start2, end2] = range2.split("-");

  return (
    (+start1 <= +start2 && +end1 >= +end2) ||
    (+start2 <= +start1 && +end2 >= +end1)
  );
};

let count = 0;

for (const line of lines) {
  const pair = line.split(",");

  if (isFullyOverlapping(pair[0], pair[1])) {
    count += 1;
  }
}

console.log("🚀 ~ file: index.ts:20 ~ count", count);
