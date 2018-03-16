/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let rob = (node, robbedParent = false) => {
  if (!node) return 0;

  let dontRobHere;
  let robHere = 0;

  if (node.dontRobHere === undefined) {
    node.dontRobHere = rob(node.left) + rob(node.right);
  }
  dontRobHere = node.dontRobHere;

  if (!robbedParent) {
    if (node.robHere === undefined) {
      robHere = node.robHere = node.val
        + rob(node.left, true)
        + rob(node.right, true);
    }
    robHere = node.robHere;
  }

  return Number(robHere > dontRobHere ? robHere : dontRobHere);
};
