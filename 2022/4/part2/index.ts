const data = await Deno.readTextFile("../input.txt");
const lines: string[] = data.split("\n");

const isOverlapping = (range1: string, range2: string): boolean => {
  const [start1, end1] = range1.split("-");
  const [start2, end2] = range2.split("-");

  return (
    (+end1 >= +start2 && +start2 >= +start1) ||
    (+end2 >= +start1 && +start1 >= +start2)
  );
};

let count = 0;

for (const line of lines) {
  const pair = line.split(",");

  if (isOverlapping(pair[0], pair[1])) {
    count += 1;
  }

  console.log(pair, isOverlapping(pair[0], pair[1]));
}

console.log("🚀 ~ file: index.ts:20 ~ count", count);
