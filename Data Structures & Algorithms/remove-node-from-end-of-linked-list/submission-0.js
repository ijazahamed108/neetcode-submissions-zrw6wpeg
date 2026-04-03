/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let count = 0;
        let current = head;
        while(current){
            count++;
            current = current.next;
        }
        const indexToRemove = count-n;
        if(indexToRemove === 0){
            return head.next;
        }
        current=head;
        for (let i=0;i<count-1;i++){
            if(i+1 == indexToRemove){
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
        return head;
    }
}
