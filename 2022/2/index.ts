// Rock = A | X
// Paper = B | Y
// Scissors = C | Z

// Win = 6
// Draw = 3
// Lose = 0

type Value = {
  [key: string]: number;
};

const value: Value = {
  X: 1,
  Y: 2,
  Z: 3,
};

// Part 1
// const getOutcome = (opponent: string, me: string): number => {
//   switch (opponent) {
//     case "A":
//       if (me === "Y") return 6;
//       return me === "X" ? 3 : 0;
//     case "B":
//       if (me === "Z") return 6;
//       return me === "Y" ? 3 : 0;
//     case "C":
//       if (me === "X") return 6;
//       return me === "Z" ? 3 : 0;
//     default:
//       return 0;
//   }
// };

const gameOutcome: Value = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
};

// Part 2
const getPlay = (opponent: string, score: number): string => {
  switch (score) {
    case 6:
      if (opponent === "A") return "Y";
      return opponent === "B" ? "Z" : "X";
    case 3:
      if (opponent === "A") return "X";
      return opponent === "B" ? "Y" : "Z";
    case 0:
      if (opponent === "A") return "Z";
      return opponent === "B" ? "X" : "Y";
    default:
      return "X";
  }
};

const data = await Deno.readTextFile("./input.txt");

const lines: string[] = data.split("\n");

const scores: number[] = lines.map((line) => {
  const [them, outcome] = line.split(" ");
  // const itemValue = value[me];
  // const outcome = getOutcome(them, me);
  // return itemValue + outcome;

  const score = gameOutcome[outcome];
  const myPlay = getPlay(them, score);

  return value[myPlay] + score;
});

console.log(scores);

const total = scores.reduce((a, b) => a + b, 0);
console.log("🚀 ~ file: index.ts:50 ~ total", total);
