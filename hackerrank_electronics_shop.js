//HackerRank Electronics Shop Algorithm

//https://www.hackerrank.com/challenges/electronics-shop/copy-from/264834627?isFullScreen=true

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let minSum = Math.min(...keyboards) + Math.min(...drives) 
    let tempSum, sum=0
    if(minSum > b){
        return -1
    }
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            tempSum = keyboards[i] + drives[j]
            if(sum < tempSum && tempSum <= b)
                sum = tempSum
        }
    }
    return sum

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));
   
    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}
