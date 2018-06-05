function pylons(k, arr) {
  k = k - 1; // distance is less than k
  let i = k;
  let pylonCount = 0;
    let p = 0;
  while (i - k < arr.length) {
    for (let j = i; j >= i - (2 * k); j--) {
      if (arr[j]) {
        i = j;
        pylonCount++;
        break;
      }

      if (j === i - (2 * k)) {
        return -1;
      }
    }

    i += (2 * k) + 1;
  }

  return pylonCount;
}
