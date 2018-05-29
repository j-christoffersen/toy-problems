// Complete the connectedCell function below.
function connectedCell(matrix) {
  const toSearch = (new Array(matrix.length))
    .fill(0)
    .map(
      () => (new Array(matrix[0].length)).fill(true)
    );

  const search = function(i, j) {
    if (!(toSearch[i] && toSearch[i][j]) || matrix[i][j] === 0) return 0;

    toSearch[i][j] = false;

    let componentSize = 1;

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]];
        
    dirs.forEach((dir) => {
      const [di, dj] = dir;


      componentSize += search(i + di, j + dj);
    });

    return componentSize;
  };

  return matrix.reduce((curMax, row, i) => {
    const maxFromRow = row.reduce((curMaxFromRow, val, j) => {
      const componentSize = search(i, j);

      return componentSize > curMaxFromRow ? componentSize : curMaxFromRow;
    }, 0);

    return maxFromRow > curMax ? maxFromRow : curMax;
  }, 0);
}
