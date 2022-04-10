//HackerRank Plus Minus
//https://www.hackerrank.com/challenges/plus-minus/copy-from/260976555?isFullScreen=true

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount=0, negativeCount=0, zeroCount=0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] > 0){
            positiveCount++;
        }else if(arr[i] == 0){
            zeroCount++;
        }else{
            negativeCount++;
        }
    }
    positiveCount = positiveCount/arr.length;
    zeroCount = zeroCount/arr.length;
    negativeCount = negativeCount/arr.length;

    console.log(positiveCount)
    console.log(negativeCount)
    console.log(zeroCount)
}
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
