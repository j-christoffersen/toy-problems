/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const canMeasureWater = (x, y, z) => {
  const states = {};
  const explore = (a, b) => {
    if (states[a] && states[a][b]) return false;
    if (a + b === z) return true;

    states[a] = states[a] || [];
    states[a][b] = true;

    // fill a
    let aStar = x;
    let bStar = b;
    if (explore(aStar, bStar)) {
      return true;
    }

    // fill b
    aStar = a;
    bStar = y;
    if (explore(aStar, bStar)) {
      return true;
    }

    // empty a
    aStar = 0;
    bStar = b;
    if (explore(aStar, bStar)) {
      return true;
    }

    // empty b
    aStar = a;
    bStar = 0;
    if (explore(aStar, bStar)) {
      return true;
    }

    // fill a with b
    aStar = Math.min(x, a + b);
    bStar = Math.max(b - (x - a), 0);
    if (explore(aStar, bStar)) {
      return true;
    }

    // fill b with a
    aStar = Math.max(0, a - (y - b));
    bStar = Math.min(y, a + b);
    if (explore(aStar, bStar)) {
      return true;
    }

    return false;
  };

  return explore(0, 0);
};
