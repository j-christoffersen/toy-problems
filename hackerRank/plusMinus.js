// Complete the plusMinus function below.
const fs = require('fs');


function plusMinus(arr) {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((num) => {
    if (num > 0) {
      positives++;
    } else if (num < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });

  ws.write((positives / arr.length).toFixed(6) + '\n');
  ws.write((negatives / arr.length).toFixed(6) + '\n');
  ws.write((zeros / arr.length).toFixed(6) + '\n');

  ws.end();
}
