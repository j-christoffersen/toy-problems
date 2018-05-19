function surfaceArea(A) {
  let SA = 2 * A.length * A[0].length;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j - 1]) {
        if (A[i][j - 1] < A[i][j]) {
          SA += A[i][j] - A[i][j - 1];
        }
      } else {
        SA += A[i][j];
      }

      if (A[i][j + 1]) {
        if (A[i][j + 1] < A[i][j]) {
          SA += A[i][j] - A[i][j + 1];
        }
      } else {
        SA += A[i][j];
      }

      if (A[i - 1]) {
        if (A[i - 1][j] < A[i][j]) {
          SA += A[i][j] - A[i - 1][j];
        }
      } else {
        SA += A[i][j];
      }

      if (A[i + 1]) {
        if (A[i + 1][j] < A[i][j]) {
          SA += A[i][j] - A[i + 1][j];
        }
      } else {
        SA += A[i][j];
      }
    }
  }

  return SA;
}
