/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
  var path = [0, 0];
  var dir = 0;
  var out = true;
  var danger = false;
  for (var i = 0; i < x.length; i++) {
    var dx = dir < 2 ? x[i] : -x[i];
    path.push(path[path.length - 2] + dx);

    if (path.length > 7) {
      path.unshift();
    }

    if (path.length >= 5) {
      if (
        out &&
        (dir < 2 && path[path.length - 1] <= path[path.length - 5]) ||
        (dir >= 2 && path[path.length - 1] >= path[path.length - 5])
      ) {
        out = false;
        if (
          path[path.length - 7] &&
          (dir < 2 && path[path.length - 1] <= path[path.length - 7]) ||
          (dir >= 2 && path[path.length - 1] >= path[path.length - 7])
        ) {
          danger = true;
        }
      } else if (!out) {
        if (
          (dir < 2 && path[path.length - 1] >= path[path.length - 5]) ||
          (dir >= 2 && path[path.length - 1] <= path[path.length - 5]) ||
          (
            danger &&
            (dir < 2 && path[path.length - 1] >= path[path.length - 7]) ||
            (dir >= 2 && path[path.length - 1] <= path[path.length - 7])
          )
        ) {
          return true;
        }
        danger = false;
      }
    }
  }

  return false;
};