// Complete the queensAttack function below.
function queensAttack(n, k, rq, cq, obstacles) {
  const spaces = {
    up: n - rq,
    down: rq - 1,
    right: n - cq,
    left: cq - 1,
    minorUp: Math.min(n - rq, cq - 1),
    minorDown: Math.min(rq - 1, n - cq),
    majorUp: Math.min(n - cq, n - rq),
    majorDown: Math.min(rq - 1, cq - 1),
  };

  obstacles.forEach((obstacle) => {
    if (obstacle[0] === rq) {
      if (obstacle[1] < cq) {
        spaces.left = Math.min(spaces.left, cq - obstacle[1] - 1);
      } else {
        spaces.right = Math.min(spaces.right, obstacle[1] - cq - 1);
      }
    } else if (obstacle[1] === cq) {
      if (obstacle[0] < rq) {
        spaces.down = Math.min(spaces.down, rq - obstacle[0] - 1);
      } else {
        spaces.up = Math.min(spaces.up, obstacle[0] - rq - 1);
      }
    } else if (obstacle[0] + obstacle[1] === rq + cq) {
      if (obstacle[0] < rq) {
        spaces.minorDown = Math.min(spaces.minorDown, rq - obstacle[0] - 1);
      } else {
        spaces.minorUp = Math.min(spaces.minorUp, obstacle[0] - rq - 1);
      }
    } else if (obstacle[0] - obstacle[1] === rq - cq) {
      if (obstacle[0] < rq) {
        spaces.majorDown = Math.min(spaces.majorDown, rq - obstacle[0] - 1);
      } else {
        spaces.majorUp = Math.min(spaces.majorUp, obstacle[0] - rq - 1);
      }
    }
  });

  return Object.values(spaces).reduce((sum, value) => sum + value);
}
