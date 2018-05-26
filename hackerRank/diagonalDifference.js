function diagonalDifference(a) {
  const minor = a.reduce((sum, row, i) => {
    return sum + row[i];
  }, 0);

  const major = a.reduce((sum, row, i) => {
    return sum + row[row.length - i - 1];
  }, 0);
    
    console.log(minor);

  return Math.abs(major - minor);
}
