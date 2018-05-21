// Complete the pairs function below.
function pairs(k, arr) {
  const seen = {};
  let count = 0;
  for (let i = 0, j = 0; j < arr.length; j++) {
    seen[arr[i]] = true;
    if (seen[arr[i] + k]) count++;
    if (seen[arr[i] - k]) count++;
  }

  return count;
}
