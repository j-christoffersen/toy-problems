/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const mem = [];

  const recurse = (a, b) => {
    if (mem[a] && mem[a][b]) {
      return mem[a][b];
    }

    if (a === b) {
      return 0;
    }

    if (a === b - 1) {
      mem[a] = mem[a] || [];
      mem[a][b] = a;
      return a;
    }

    let min = Number.MAX_VALUE;

    for (let i = a + 1; i < b; i++) {
      const newVal = Math.max(recurse(a, i - 1), recurse(i + 1, b));

      if (newVal + i < min) {
        min = newVal + i;
      }
    }

    mem[a] = mem[a] || [];
    mem[a][b] = min;
    return min;
  };

  return recurse(1, n);
};
