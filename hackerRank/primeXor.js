// Complete the primeXor function below.
const mod = 1000000007;

function primeXor(a) {
  const preCounts = a.reduce((pc, num) => {
    pc[num] = pc[num] || 0;
    pc[num]++;
    return pc;
  }, {});

  let counts = { 0: 1 };

  Object.keys(preCounts).forEach((n) => {
    const evens = Math.floor(preCounts[n] / 2);
    const odds = Math.ceil(preCounts[n] / 2);

    const newCounts = Object.assign({}, counts);

    Object.keys(counts).forEach((m) => {
      newCounts[n ^ m] = newCounts[n ^ m] || 0;
      newCounts[n ^ m] += counts[m] * odds;
      newCounts[n ^ m] %= mod;

      newCounts[m] += counts[m] * evens;
      newCounts[m] %= mod;
    });

    counts = newCounts;
  });

  const sieve = primeSieve(2 ** 13);

  // Object.keys(counts).forEach((num) => {
  //   console.log(num, counts[num], sieve[num]);
  // });

  return Object.keys(counts)
    .filter(n => sieve[n])
    .map(prime => counts[prime])
    .reduce((sum, val) => (sum + val) % mod, 0);
}

function primeSieve(n) {
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = 2; j * i <= n; j++) {
        sieve[i * j] = false;
      }
    }
  }

  return sieve;
}
