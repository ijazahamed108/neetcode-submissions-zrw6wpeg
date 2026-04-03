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
     * @return {number[][]}
     */
    levelOrder(root) {
         if(!root) return [];
   let ans = [];
   let Queue = [root];
    
    while(Queue.length){
        let current_level_values = [];
        let n = Queue.length;
        for (let i=0; i<n; i++){
            let currentNode = Queue.shift();
            current_level_values.push(currentNode.val);
            currentNode.left && Queue.push(currentNode.left);
            currentNode.right  && Queue.push(currentNode.right);
        }
        ans.push(current_level_values);
    }
    return ans;
    }
}
