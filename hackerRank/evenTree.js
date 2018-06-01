class Tree {
  constructor(n, edges) {
    this.nodes = (new Array(n)).fill(0).map(() => []);

    edges.forEach((edge) => {
      this.nodes[edge[0] - 1].push(edge[1] - 1);
      this.nodes[edge[1] - 1].push(edge[0] - 1);
    });
  }

  forEachSubtree(cb, node = 0, parent = -1) {
    let size = 1;

    this.nodes[node].forEach((neighbor) => {
      if (neighbor !== parent) {
        size += this.forEachSubtree(cb, neighbor, node);
      }
    });

    cb(size);
    return size;
  }
}

function evenTree(n, edges) {
  const tree = new Tree(n, edges);

  let cuts = -1; // exclude the entire tree

  tree.forEachSubtree((size) => {
    if (size % 2 === 0) cuts++;
  });

  return cuts;
}

const fs = require('fs');
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

function main() {
  const treeNodesEdges = readLine().split(' ');
  const n = parseInt(treeNodesEdges[0], 10);
  const m = parseInt(treeNodesEdges[1], 10);

  const edges = [];

  for (var i = 0; i < m; i++) {
    edges.push(readLine().split(' ').map(numString => parseInt(numString)));
  }

  const result = evenTree(n, edges);

  ws.write(result + '\n');
  ws.end();
}
