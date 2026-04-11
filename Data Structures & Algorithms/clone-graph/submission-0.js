/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

    const map = new Map();

    function dfs(curr) {
        // If already cloned, return it
        if (map.has(curr)) {
            return map.get(curr);
        }

        // Clone node
        let clone = new Node(curr.val);
        map.set(curr, clone);

        // Clone neighbors
        for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone;
    }

    return dfs(node);
    }
}
