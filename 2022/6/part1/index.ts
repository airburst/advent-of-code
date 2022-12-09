const data = await Deno.readTextFile("../input.txt");
const uniqueLength = 14;

let pos = 0;
const stack: string[] = [];

const allDifferent = (letters: string[]) => {
  const uniques = new Set(letters);
  return uniques.size === uniqueLength;
};

while (data.charAt(pos) && !allDifferent(stack)) {
  stack.push(data.charAt(pos));
  if (stack.length === uniqueLength + 1) {
    stack.shift();
  }
  pos += 1;
}

console.log(pos);
