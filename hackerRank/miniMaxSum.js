const fs = require('fs');

function miniMaxSum(arr) {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;
  arr.forEach(val => {
    if (val > max) max = val;

    if (val < min) min = val;

    sum += val;
  });

  const minSum = sum - max;
  const maxSum = sum - min;

  ws.write(minSum + ' ' + maxSum + '\n');
  ws.end();
}
