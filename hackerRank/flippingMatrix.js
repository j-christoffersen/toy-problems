// Complete the flippingMatrix function below.
function flippingMatrix(matrix) {
  let maxTotal = 0;

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      maxTotal += Math.max(
        matrix[i][j],
        matrix[matrix.length - 1 - i][j],
        matrix[i][matrix[0].length - 1 - j],
        matrix[matrix.length - 1 - i][matrix[0].length - 1 - j],
      );
    }
  }

  return maxTotal;
}
