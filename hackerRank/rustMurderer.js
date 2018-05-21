function rustMurderer(n, roads, s) {
  const nodes = [];
  const dists = [];
  for (let i = 0; i < n; i++) {
    nodes[i] = [];
    dists[i] = 1;
  }

  roads.forEach((road) => {
    nodes[road[0] - 1].push(road[1] - 1);
    nodes[road[1] - 1].push(road[0] - 1);
  });

  dists[s - 1] = 0;
    
  let unknowns = [];

  nodes[s - 1].forEach((child) => {
    unknowns.push(child);
    dists[child] = undefined;
  });
    
  let lastLoopExplored = nodes.length - unknowns.length - 1;
  let currentDist = 2;

  while (unknowns.length > 0) {
    let nextUnknowns = [];

    unknowns.forEach((unknown) => {
      let childCount = 0;

      nodes[unknown].forEach((childNode) => {
          console.log(childNode, dists[childNode]);
        if (dists[childNode] === currentDist - 1) {
          childCount++;
        }
      });

        
      if (childCount < lastLoopExplored) {
        dists[unknown] = currentDist; 
      } else {
        nextUnknowns.push(unknown);
      }
    });

    currentDist++;
    unknowns = nextUnknowns;
  }

  dists.splice(s - 1, 1);
  return dists;
}