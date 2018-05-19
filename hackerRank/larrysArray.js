function larrysArray(A) {
  let swaps = 0;
  outer: for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      if (A[j] === i + 1) {
        if (j !== i) {
          A[j] = A[i];
          A[i] = i + 1;
          swaps++;
        }

        continue outer;
      }
    }
  }

  return swaps % 2 === 0 ? 'YES' : 'NO';
}
