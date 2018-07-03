// Complete the stockmax function below.
function stockmax(prices) {
  let total = 0;
  let max = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > max) {
      max = prices[i];
    } else {
      total += max - prices[i];
    }
  }

  return total;
}
