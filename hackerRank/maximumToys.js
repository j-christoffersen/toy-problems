// Complete the maximumToys function below.
function maximumToys(prices, k) {
  prices.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    if (total > k) {
      return i;
    }
  }

  return proces.length;
}
