function candies(n, arr) {
  const dp = [];

  const getCandies = (i) => {
    if (dp[i]) return dp[i];
    let c = 1;

    if (arr[i - 1] && arr[i - 1] < arr[i]) {
      c = getCandies(i - 1) + 1;
    }

    if (arr[i + 1] && arr[i + 1] < arr[i]) {
      c = Math.max(c, getCandies(i + 1) + 1);
    }

    dp[i] = c;
    return c;
  };

  let totalCandies = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCandies += getCandies(i);
  }
  return totalCandies;
}
