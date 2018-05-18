function biggerIsGreater(w) {
  for (let i = w.length - 2; i >= 0; i--) {
    if (w[i] < w[i + 1]) {
      const right = w.substring(i + 1).split('');

      const minIndex = right.reduce((minIndexAcc, char, j, arr) => {
        if (char < arr[minIndexAcc] && char > w[i]) return j;
        return minIndexAcc;
      }, 0);

      const left = w.substring(0, i + 1).split('');

      [left[i], right[minIndex]] = [right[minIndex], left[i]];

      return left.concat(right.sort()).join('');
    } 
  }

  return 'no answer';
}
