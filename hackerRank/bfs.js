// Complete the bfs function below.
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

function bfs(n, m, edges, s) {
  const edgeWeight = 6;

  const dists = (new Array(n)).fill(-1);

  const nodes = (new Array(n)).fill(0).map(() => []);

  edges.forEach((edge) => {
    nodes[edge[0] - 1].push(edge[1] - 1);
    nodes[edge[1] - 1].push(edge[0] - 1);
  });
    
  const q = new Queue();

  q.enqueue({ i : s - 1, depth: 0 });

  while (q.hasNext()) {
    const { i, depth } = q.dequeue();
    // console.log(i, depth);
    if (dists[i] === -1) {
      dists[i] = depth;
      nodes[i].forEach((child) => {
        q.enqueue({ i: child, depth: depth + 1 });
      });
    }
  }

  return dists.filter(dist => dist !== 0).map(dist => dist === -1 ? -1 : dist * edgeWeight);
}
