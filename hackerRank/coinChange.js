// Complete the getWays function below.
function getWays(n, c) {
  c = c.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let dp = [];

  const getCombos = (i, total) => {
    if(dp[i] && dp[i][total]) return dp[i][total];

    dp[i] = dp[i] || [];

    if (total === n) {
      dp[i][total] = 1;
      return 1;
    }

    if (!(i < c.length)) {
      dp[i][total] = 0;
      return 0;
    }

    let comboCount = 0;

    for (let newTotal = total; newTotal <= n; newTotal += c[i]) {
      comboCount += getCombos(i + 1, newTotal);
    }

    dp[i][total] = comboCount;
    return comboCount;
  };
    
    // console.log(getCombos(0, 0));
    return getCombos(0, 0);
}
