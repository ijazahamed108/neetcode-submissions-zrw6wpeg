/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

// 1. Compute left max path
// 2. Compute right max path
// 3. Update global max using (left + node + right)
// 4. Return max single path upward
    maxPathSum(root) {
        let maxSum = -Infinity;

        function dfs(node){
            if(!node) return 0;
            let left = Math.max(0, dfs(node.left));
            let right = Math.max(0, dfs(node.right));

            let currentSum = node.val+left+right;
            maxSum = Math.max(currentSum, maxSum);
            return node.val+(Math.max(left, right))

        }

        dfs(root);
        return maxSum;
    }
}
