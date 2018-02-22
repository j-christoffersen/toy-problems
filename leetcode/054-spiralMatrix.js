/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var size = matrix.length * matrix[0].length;
    var boundaries = [matrix[0].length - 1, matrix.length - 1, 0, 1];
    var output = [];

    var vels = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    var velIndex = 0;
    var pos = [0, 0];

    while (output.length < size) {
      console.log(pos);
      output.push(matrix[pos[0]][pos[1]]);
      var vel = vels[velIndex];
      var newPos = [pos[0] + vel[0], pos[1] + vel[1]];
      console.log('np', newPos);
      if (
        (velIndex === 0 && newPos[1] > boundaries[0]) ||
        (velIndex === 1 && newPos[0] > boundaries[1]) ||
        (velIndex === 2 && newPos[1] < boundaries[2]) ||
        (velIndex === 3 && newPos[0] < boundaries[3])
      ) {
        if (velIndex === 0 || velIndex === 1) {
            boundaries[velIndex]--;
        } else {
            boundaries[velIndex]++;
        }
        velIndex = (velIndex + 1) % 4;
        vel = vels[velIndex];
        pos = [pos[0] + vel[0], pos[1] + vel[1]];
      } else {
        pos = newPos;
      }
    }

    return output;
};
