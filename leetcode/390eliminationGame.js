/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let eliminated = 0;
  let i = 0;
  let stepSize = 2;
  while (eliminated < n - 1) {
    // console.log(i);
    if (i + stepSize < n && i + stepSize >= 0) {
      i += stepSize;
    } else if (i + stepSize / 2 < n && i + stepSize / 2 >= 0) {
      i += stepSize / 2;
      stepSize *= -2;
    } else {
      i -= stepSize / 2;
      stepSize *= -2;
    }

    eliminated++;
  }

  return i + 1;
};
