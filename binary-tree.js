/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let queue = [this.root];
    let depth = 0;

    if (!this.root) return 0;
    while (queue.length) {
      let node = queue.shift();
      if (queue.length < 1) //If the queue ends up being empty, we're moving down a level.
        depth++;

      // console.log(`Depth: ${depth + 1} Queue: [${queue.map(q => q.val)}]`);
      if (!node.left && !node.right) return depth + 1;

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);

    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function delve(node) {
      if (!node.left && !node.right) return 1;
      if (!node.left) return delve(node.right) + 1;
      if (!node.right) return delve(node.left) + 1;
      return Math.max(delve(node.left), delve(node.right)) + 1;
    }

    return delve(this.root);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;
    function delve(node) {
      if (!node) return 0;
      let leftSum = delve(node.left);
      let rightSum = delve(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }

    delve(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return;
    let lowest = this.root;

    function delve(node) {
      if (!node) return;
      if (lowest && node.val < lowest.val && node.val > lowerBound) {
        lowest = node;
      }
      delve(node.left);
      delve(node.right);
      if (!lowest) lowest = node;
    }
    delve(this.root);
    return lowest.val;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
