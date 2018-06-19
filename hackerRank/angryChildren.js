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
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the angryChildren function below.
function sumInRange(arr, end) {
  let s = 0;

  for (let i = 0; i < end; i++) {
    s += arr[i];
  }

  return s;
}

function getDiff(arr, end) {
  let sum = 0;
  let diff = 0;

  for (let i = 0; i < end; i++) {
    diff += (arr[i] * i) - sum;
    sum += arr[i];
  }

  return diff;
}

function angryChildren(k, packets) {
  packets.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let sum = sumInRange(packets, k);
  let diff = getDiff(packets, k);
  let minDiff = diff;

  for (let i = 0; i + k < packets.length; i++) {
    sum -= packets[i];
    diff -= sum - (packets[i] * (k - 1));

    diff += (packets[i + k] * (k - 1)) - sum;
    sum += packets[i + k];

    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const k = parseInt(readLine(), 10);

  let packets = [];

  for (let i = 0; i < n; i++) {
    const packetsItem = parseInt(readLine(), 10);
    packets.push(packetsItem);
  }

  let result = angryChildren(k, packets);
  console.log(result);

  // ws.write(result + "\n");

  // ws.end();
}
