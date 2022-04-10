//HackerRank Mini-Max Sum
//https://www.hackerrank.com/challenges/mini-max-sum/copy-from/263260649?isFullScreen=true

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let max=0, min=0, sum=0;
      for(let i=0; i<5; i++){
      min+=arr[i];
      }
    for(let i=0; i<5; i++){
        sum=0;
        
        for(let x=0; x<5; x++){
            if(i!=x){
                sum += arr[x]
                
                
            }
        }
        if(sum > max){
                    max = sum;
                } if(sum < min){
                    min = sum;
                }
    }
    console.log(min, max)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
