// doesn't pass all tests, times out on most

// Complete the solve function below.
function solve(data, edges) {
  const nodes = (new Array(data.length)).fill(0).map(() => []);

  edges.forEach((edge) => {
    nodes[edge[0] - 1].push(edge[1] - 1);
    nodes[edge[1] - 1].push(edge[0] - 1);
  });
    
  console.log(nodes);

  const total = data.reduce((sum, val) => sum + val);
    
  let memFunc;

  function forEachSubtreeValue(i, cb, parent = -1) {
    if (nodes[i].length === 1 && parent !== -1) {
      return data[i];
    }

    let allChildrenVal = data[i];

    nodes[i].forEach((child) => {
      if (child !== parent) {
        let childTreeVal = forEachSubtreeValue(child, cb, i);
        allChildrenVal += childTreeVal;
        cb(childTreeVal);
      }
    });

    return allChildrenVal;
  }

  let minDiff = Number.POSITIVE_INFINITY;

  forEachSubtreeValue(0, (subtreeVal) => {
    const newDiff = Math.abs(subtreeVal - (total - subtreeVal));
    console.log(subtreeVal, newDiff);

    if (newDiff < minDiff) {
      minDiff = newDiff;
    }
  });

  return minDiff;
}
