function maxSubsequence(arr) {
  let total = 0;
  arr.forEach((val) => {
    if (val > 0) total += val;
  })

  if (total > 0) return total;

  return Math.max(...arr);
}

function maxSubarray(arr) {
  let maxValue = 0;
  let currentValue = 0;

  arr.forEach((val) => {
    currentValue = Math.max(currentValue + val, 0);

    if (currentValue > maxValue) maxValue = currentValue;
  })

  if (maxValue > 0) return maxValue;

  return Math.max(...arr);
}

function maxBoth(arr) {
  return [maxSubarray(arr), maxSubsequence(arr)];
}
