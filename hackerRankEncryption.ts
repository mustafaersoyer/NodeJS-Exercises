//HackerRak Encryption
//https://www.hackerrank.com/challenges/encryption/copy-from/265254030?isFullScreen=true

"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s: string): string {
  // Write your code here
  let spaceRemoved: string = s.replace(" ", "");
  let sqrt: number = Math.sqrt(spaceRemoved.length);
  let row: number = Math.floor(sqrt);
  let column: number = Math.ceil(sqrt);
  let rowAndCols: string = "";
  let encryptedText: string = "";
  for (let i = 0; i < spaceRemoved.length; i++) {
    if (i % column === 0 && i !== 0) rowAndCols += "\n";
    rowAndCols += spaceRemoved[i];
  }
  let arrayRowAndCols: string[] = rowAndCols.split("\n");
  for (let letter = 0; letter < column; letter++) {
    for (let word = 0; word < arrayRowAndCols.length; word++) {
      if (arrayRowAndCols[word][letter] !== undefined)
        encryptedText += arrayRowAndCols[word][letter];
    }
    encryptedText += " ";
  }
  return encryptedText;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: string = encryption(s);

  ws.write(result + "\n");
  ws.end();
}
