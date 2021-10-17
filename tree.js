/** TreeNode: node for a general tree. */

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        let sum = 0;
        let queue = [this.root];
        if (!this.root) return 0;

        while (queue.length) {
            let node = queue.shift();
            sum += node.val;
            for (let child of node.children) {
                queue.push(child);
            }
        }
        return sum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {
        let evens = 0;
        let queue = [this.root];
        if (!this.root) return 0;

        while (queue.length) {
            let node = queue.shift();
            if (node.val % 2 === 0) evens++;
            for (let child of node.children) {
                queue.push(child);
            }
        }
        return evens;
    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {
        let num = 0;
        let queue = [this.root];
        if (!this.root) return 0;

        while (queue.length) {
            let node = queue.shift();
            if (node.val > lowerBound) num++;
            for (let child of node.children) {
                queue.push(child);
            }
        }
        return num;
    }
}

module.exports = { Tree, TreeNode };
