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
     * @return {number[]}
     */
    rightSideView(root) {

        if(!root) return [];
        let result = [];
        let Queue = [root];

        while(Queue.length){
            let n = Queue.length;
            for(let i=0;i<n;i++){
                let curr = Queue.shift();
                if(i === n-1){
                    result.push(curr.val)
                }
                if(curr.left) Queue.push(curr.left);
                if(curr.right) Queue.push(curr.right);
            }
        }
        return result;
    }
}
