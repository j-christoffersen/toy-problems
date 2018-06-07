// Complete the cost function below.
function cost(B) {
  let bestFromTop = 0;
  let bestFromBot = 0;

  for (let i = 1; i < B.length; i++) {
    let newBestFromTop = Math.max(
      bestFromTop + Math.abs(B[i] - B[i - 1]),
      bestFromBot + (B[i] - 1),
    );

    bestFromBot = Math.max(
      bestFromTop + (B[i - 1] - 1),
      bestFromBot,
    );
    
    bestFromTop = newBestFromTop;
      
    // console.log(bestFromTop, bestFromBot);
  }

  return Math.max(bestFromTop, bestFromBot);
}
