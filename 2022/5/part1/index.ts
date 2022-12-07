const data = await Deno.readTextFile("../test.txt");
const lines: string[] = data.split("\n");
