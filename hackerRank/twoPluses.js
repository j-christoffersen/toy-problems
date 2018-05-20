function plusArea(plus) {
  if (plus.size === 0 || plus.size === 1) return plus.size;

  return 1 + 4 * (plus.size - 1);
}

function overlap(plus1, plus2) {
  if (plus1.i === plus2.i) return Math.abs(plus1.j - plus2.j) < plus1.size + plus2.size - 1;

  if (plus1.j === plus2.j) return Math.abs(plus1.i - plus2.i) < plus1.size + plus2.size - 1;

  return Math.min(Math.abs(plus1.i - plus2.i), Math.abs(plus1.j - plus2.j)) < plus1.size &&
  Math.min(Math.abs(plus1.i - plus2.i), Math.abs(plus1.j - plus2.j)) < plus2.size &&
  (Math.max(Math.abs(plus1.i - plus2.i), Math.abs(plus1.j - plus2.j)) < plus1.size ||
    Math.max(Math.abs(plus1.i - plus2.i), Math.abs(plus1.j - plus2.j)) < plus2.size);
}

function twoPluses(grid) {
  const pluses = [];
  for (let i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'G') {
        let size = 1;
        pluses.push({i, j, size});
        while (
          grid[i + size] && grid[i + size][j] === 'G' &&
          grid[i - size] && grid[i - size][j] === 'G' &&
          grid[i][j + size] === 'G' &&
          grid[i][j - size] === 'G'
        ) {
          size++;
          pluses.push({i, j, size});
        }
      }
    }
  }

  pluses.sort((a, b) => {
    if (a.size > b.size) return -1;
    if (a.size < b.size) return 1;
    return 0;
  });

  let maxProduct = 0;

  outer: for (let i = 0; i < pluses.length; i++) {
    if (maxProduct > plusArea(pluses[i]) ** 2) break;

    for (let j = i + 1; j < pluses.length; j++) {
      if (!overlap(pluses[i], pluses[j])) {
        maxProduct = Math.max(maxProduct, plusArea(pluses[i]) * plusArea(pluses[j]));
        continue outer;
      }
    }
  }

  return maxProduct;
}
