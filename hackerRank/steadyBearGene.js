function steadyGene(gene) {
  const totals = {
    'G': 0,
    'A': 0,
    'T': 0,
    'C': 0,
  };
    
  // console.log(gene);

  for (let i = 0; i < gene.length; i++) {
    totals[gene[i]]++;
  }

  const toChange = {
    'G': 0,
    'A': 0,
    'T': 0,
    'C': 0,
  };
  
  let minPossibleLength = 0;
    
  ['G', 'A', 'C', 'T'].forEach((nuc) => {
    if (totals[nuc] > gene.length / 4) {
      toChange[nuc] = totals[nuc] - (gene.length / 4);
      minPossibleLength += totals[nuc] - (gene.length / 4);
    }
  });

  const subtotals = {
    'G': 0,
    'A': 0,
    'T': 0,
    'C': 0,
  };

  let minlength = Number.POSITIVE_INFINITY;

  let i = 0;
  let j = 0;
  while(j <= gene.length) {
    // console.log(i, j, subtotals);
    while (
      subtotals.G >= toChange.G &&
      subtotals.A >= toChange.A &&
      subtotals.T >= toChange.T &&
      subtotals.C >= toChange.C
    ) {
      // console.log(i, j, subtotals);
      minlength = Math.min(minlength, j - i);
      subtotals[gene[i++]]--;
    }

    subtotals[gene[j++]]++;
    if (minlength === minPossibleLength) break;
  }

  return minlength;
}
