function maxMin(k, arr) {
  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let minDiff = Number.POSITIVE_INFINITY;

  for (let i = 0; i + k - 1 < arr.length; i++) {
    if (arr[i + k - 1] - arr[i] < minDiff) {
      minDiff = arr[i + k - 1] - arr[i];
    }
  }

  return minDiff;
}
