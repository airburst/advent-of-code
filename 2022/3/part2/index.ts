const data = await Deno.readTextFile("../input.txt");
const lines: string[] = data.split("\n");

const getValue = (letter: string) => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(letter)) {
    return letter.charCodeAt(0) - 96;
  }
  return letter.charCodeAt(0) - 38;
};

const removeLetters = (text: string, searchText: string = "") => {
  let possibles = "";

  for (let i = 0; i < text.length; i += 1) {
    if (searchText.includes(text[i])) {
      possibles = possibles + text[i];
    }
  }
  console.log("🚀 ~ file: index.ts:21 ~ removeLetters ~ possibles", possibles);
  return possibles;
};

let lineCount = 0;
let total = 0;

while (lineCount < lines.length) {
  let searchText = lines[lineCount];
  searchText = removeLetters(lines[lineCount + 1], searchText);
  searchText = removeLetters(lines[lineCount + 2], searchText);

  total += getValue(searchText[0]);

  lineCount += 3;
}

console.log(total);

// const items: number[] = lines.map((line) => {
//   const len = line.length;
//   let start = len / 2;
//   const firstHalf = line.slice(0, start);
//   let duplicate;

//   while (duplicate === undefined) {
//     if (firstHalf.includes(line[start])) {
//       duplicate = line[start];
//     }
//     start += 1;
//   }
//   return getValue(duplicate);
// });

// console.log(items.reduce((a, b) => a + b, 0));
