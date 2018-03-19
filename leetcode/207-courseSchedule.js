/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const nodes = [];
  for (let i = 0; i < numCourses; i++) {
    nodes.push(new GraphNode(i));
  }

  prerequisites.forEach((prereq) => {
    nodes[prereq[0]].children.push(prereq[1]);
  });

  const explored = [];
  let visited = [];

  const explore = (index) => {
    explored[index] = true;
    nodes[index].children.forEach((childIndex) => {
      explore(childIndex);
    });
      
    return false;
  };

  const visit = (index) => {
    if (visited[index]) {
      return true;
    }
    visited[index] = true;
    // console.log(visited);
    for (let i = 0; i < nodes[index].children.length; i++) {
      const childIndex = nodes[index].children[i];
      if (!explored[childIndex]) {
        let isLoop = visit(childIndex);
        // console.log(isLoop);
        if (isLoop) {
          return true;
        }
      }
    }
      
    visited[index] = false;
      
    return false;
  };

  for (let i = 0; i < nodes.length; i++) {
    visited = [];
    let isLoop = visit(i);
    if (isLoop) {
      // console.log('hi');
      return !true;
    }
    // console.log(1);
    explore(i);
    // console.log(2);
  }

  return !false;
};

class GraphNode {
  constructor(index) {
    this.index = index;
    this.children = [];
  }
}
