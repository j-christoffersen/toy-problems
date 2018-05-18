function birthdayCakeCandles(n, ar) {
  let max = -1;
  let maxCount = 0;
  ar.forEach((candle) => {
    if (candle > max) {
      max = candle;
      maxCount = 1;
    } else if (candle === max) {
      maxCount++;
    }
  });

  return maxCount;
}