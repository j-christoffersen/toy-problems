// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  c.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let total = 0;

  for (let i = c.length - 1; i >= 0; i--) {
    let prevBought = Math.floor((c.length - 1 - i) / k);
    total += c[i] * (prevBought + 1);
  }

  return total;
}
