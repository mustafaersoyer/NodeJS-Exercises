//HackerRank StairCase
//https://www.hackerrank.com/challenges/staircase/copy-from/260978525?isFullScreen=true

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let character = "";
    for(let i = 1 ; i<n;i++){
        character +=" ";
    }
    character += "#";
    for(let i = 0 ; i<n;i++){
        console.log(character)
        character += "#"
        character=character.replace(" ","")
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
