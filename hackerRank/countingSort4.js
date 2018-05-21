class countingSort {
  constructor(n) {
    this.n = n;
    this.i = 0;
    this.buckets = [];
  }

  insert(x, s) {
    if (this.i++ < this.n / 2) s = '-';

    this.buckets[x] = this.buckets[x] || [];
      
    this.buckets[x].push(s);
  }

  getResult() {
    return this.buckets.reduce((acc, arr) => acc.concat(arr)).join(' ');
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const cs = new countingSort(n);

  for (let nItr = 0; nItr < n; nItr++) {
    const xs = readLine().split(' ');

    const x = parseInt(xs[0], 10);

    const s = xs[1];
    
    cs.insert(x, s);
  }

  ws.write(cs.getResult());
  ws.end();
}
