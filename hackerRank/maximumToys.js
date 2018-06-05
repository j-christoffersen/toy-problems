// Complete the maximumToys function below.
function maximumToys(prices, k) {
  prices.sort();
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
    if (total > k) {
      return i - 1;
    }
  }

  return proces.length;
}
