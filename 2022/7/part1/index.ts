const data = await Deno.readTextFile("../test.txt");
const lines: string[] = data.split("\n");

// const fileSystem: Record<string, Dir | File> = {
const fileSystem: any = {
  "/": {},
};

console.log("🚀 ~ file: index.ts:3 ~ lines", lines);

let pos = 0;
let currentDir = null;
const parentList: string[] = [];

while (lines[pos]) {
  const entry = lines[pos];

  if (entry.startsWith("$ cd ")) {
    const dir = entry.replace("$ cd ", "");

    if (dir === "..") {
      currentDir = parentList[parentList.length - 1];
      parentList.pop();
    } else {
      parentList.push(currentDir);
      currentDir = dir;
    }
  }
  // Dir
  if (currentDir && entry.startsWith("dir ")) {
    fileSystem[currentDir] = {
      [entry.replace("dir ", "")]: null,
      ...fileSystem[currentDir],
    };
  }
  // File
  if (currentDir && !(entry.startsWith("dir") || entry.startsWith("$ cd "))) {
    fileSystem[currentDir] = {
      [entry.replace("dir ", "")]: null,
      ...fileSystem[currentDir],
    };
  }

  pos += 1;
}

console.log(fileSystem);
