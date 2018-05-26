const fs = require('fs');

function staircase(n) {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j < n - i - 1) {
        ws.write(' ');
      } else {
        ws.write('#');
      }
    }

    ws.write('\n');
  }

  ws.end();
}
