// Complete the journeyToMoon function below.

function getCombos(arr) {
  const total = arr.reduce((sum, val) => sum + val);

  return arr.reduce((sum, val) => sum + val * (total - val), 0) / 2;
}

function getComponentSize(pairs, explored, i) {
  let size = 0;

  explored[i] = true;

  pairs[i].forEach((neighbor) => {
    if (!explored[neighbor]) {
      size += getComponentSize(pairs, explored, neighbor);
    }
  });

  return size + 1;
}

function journeyToMoon(n, astronautPairs) {
  const pairs = (new Array(n)).fill(0).map(() => []);

  const explored = (new Array(n)).fill(false);

  astronautPairs.forEach((pair) => {
    pairs[pair[0]].push(pair[1]);
    pairs[pair[1]].push(pair[0]);
  });

  const connectedComponents = [];

  for (let i = 0; i < n; i++) {
    if (!explored[i]) {
      connectedComponents.push(getComponentSize(pairs, explored, i));
    }
  }
    
  // console.log(connectedComponents);

  return getCombos(connectedComponents);
}
