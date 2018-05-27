class Queue {
  constructor() {
    this.mem = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(val) {
    this.mem[this.tail++] = val;
  }

  dequeue() {
    if (this.tail > this.head) {
      return this.mem[this.head++];
    }

    return null;
  }

  hasNext() {
    return this.tail > this.head;
  }
}

function getStart(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 'M') {
        return [i, j];
      }
    }
  }
}

function getCountOfSolution(matrix) {

  function isInBounds(position) {
    return position[0] >= 0 &&
      position[0] < matrix.length &&
      position[1] >= 0 &&
      position[1] < matrix[0].length;
  }

  const start = getStart(matrix);

  const q = new Queue();

  q.enqueue({position: start, count: 0, prev: null});

  while (q.hasNext()) {
    const move = q.dequeue();

    console.log(move);
      
    if (matrix[move.position[0]][move.position[1]] === '*') {
      return move.count;
    }

    const validMoves = [];
    [[0,1], [1,0], [0, -1], [-1, 0]].forEach((direction) => {
      let newPosition = [direction[0] + move.position[0], direction[1] + move.position[1]];
      if (isInBounds(newPosition) && matrix[newPosition[0]][newPosition[1]] !== 'X' &&
        !(move.prev && newPosition[0] === move.prev[0] && newPosition[1] === move.prev[1])
      ) {
        validMoves.push(newPosition);
      }
    });

    const newCount = move.count + (validMoves.length > 1 ? 1 : 0);
    validMoves.forEach((validMove) => {
      q.enqueue({position: validMove, prev: move.position, count: newCount });
    });
  }
}

function countLuck(matrix, k) {
  return getCountOfSolution(matrix) === k ? 'Impressed' : 'Oops!';
}
