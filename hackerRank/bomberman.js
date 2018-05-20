function generateNextGrid(grid) {
  let nextGrid = grid.map(row => row.map(() => '.'));

  grid.forEach((row, i) => {
    row.forEach((space, j) => {
      if (space === '.') {
        nextGrid[i][j] = 'O';
      }
    });
  });

  return nextGrid;
}

function explode(grid, nextGrid) {
  grid.forEach((row, i) => {
    row.forEach((space, j) => {
      if (space === 'O') {
        [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([di, dj]) => {
          if (nextGrid[i + di] && nextGrid[i + di][j + dj]) {
            nextGrid[i + di][j + dj] = '.';
          }
        });
      }
    });
  });
}

function bomberMan(n, grid) {
  grid = grid.map(row => row.split(''));

  if (n === 0 || n === 1) return grid.map(row => row.join(''));

  if (n % 2 === 0) return grid.map(row => row.fill('O')).map(row => row.join(''));
    
  n = ((n + 2) % 4) + 2;

  let nextGrid;

  for (let i = 1; i < n; i += 2) {
    nextGrid = generateNextGrid(grid);
    explode(grid, nextGrid);
    grid = nextGrid;
  }

  return grid.map(row => row.join(''));
}
