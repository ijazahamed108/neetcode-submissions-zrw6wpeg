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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();

        for(let i=0; i<inorder.length; i++){
            map.set(inorder[i], i)
        }
        let preIndex = 0;
        function dfs(left, right){
            if(left > right) return null;

            // construct Root;
            let rootValue = preorder[preIndex];
            preIndex++;
            let root = new TreeNode(rootValue);

            let index = map.get(rootValue);
            // Construct and Attach Roots left and right;
            root.left = dfs(left, index-1);
            root.right = dfs(index+1, right);
            // return constructed root;
            return root;

        }
        return dfs(0, inorder.length-1)
    }
}
