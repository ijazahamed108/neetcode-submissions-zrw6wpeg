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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        
        function serialize(node){
            if(!node) return "#";
             
            return node.val+","+serialize(node.left)+","+serialize(node.right);

        }
        return serialize(root).includes(serialize(subRoot))
    }
}
