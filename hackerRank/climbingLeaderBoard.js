function climbingLeaderboard(scores, alice) {
  const uniqueScores = [];

  scores.forEach((score, i) => {
    if (score !== scores[i - 1]) {
      uniqueScores.push(score);
    }
  });

  scores = uniqueScores;

  const out = [];

  let j = scores.length - 1;
  for (let i = 0; i < alice.length; i++) {
    while (alice[i] >= scores[j]) j--;
    out.push(j + 2);
  }

  return out;
}
