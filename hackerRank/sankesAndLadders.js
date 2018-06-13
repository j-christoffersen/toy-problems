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
    if (this.head === this.tail) return undefined;
    
    const returnVal = this.mem[this.head++];

    if (this.mem.length > (this.tail - this.head) * 2) {
      this.resize();
    }

    return returnVal;
  }

  hasNext() {
    return this.size() > 0;
  }

  size() {
    return this.tail - this.head;
  }

  resize() {
    this.mem = this.mem.slice(this.head);
    this.tail -= this.head;
    this.head = 0;
  }
}

function quickestWayUp(ladders, snakes) {
  const warps = {};
  [...ladders, ...snakes].forEach((warp) => {
    warps[warp[0]] = warp[1];
  });
  
  const passed = new Array(100).fill(false);

  const q = new Queue();
  q.enqueue({space: 1, moves: 0});
    
  while(q.hasNext()) {
    const {space, moves} = q.dequeue();
      
    if (space === 100) {
      return moves;
    }
      
    if (space > 100) {
      continue;
    }
      
    passed[space] = true;

    [6,5,4,3,2,1].forEach((roll) => {
      let newSpace = space + roll;
      if (warps[newSpace] !== undefined) {
        newSpace = warps[newSpace];
      }

      if (!passed[newSpace]) {
        q.enqueue({space: newSpace, moves: moves + 1});
      }
    });
  }

  return -1;
}