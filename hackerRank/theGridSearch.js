function gridSearch(G, P) {
  for (let i = 0; i < G.length - P.length + 1; i++) {
    startingSpot: for (let j = 0; j < G[0].length - P[0].length + 1; j++) {
      for (let pi = 0; pi < P.length; pi++) {
        for (let pj = 0; pj < P[0].length; pj++) {
          if (G[i + pi][j + pj] !== P[pi][pj]) {
            continue startingSpot;
          }
        }
      }

      return 'YES';
    }
  }

  return 'NO';
}
