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
     * @return {void}
     */
    reorderList(head) {
        //Find Middle
        let slow = head;
        let fast = head.next;
        while (fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        let previous = null;
        slow.next = null; // partition linked list by unlinking second half
        //reverse second half
        while(second !=null){
            const temp = second.next;
            second.next = previous;
            previous = second;
            second = temp;
        }
        // merge both lists
        //first element of first half links to forst element of reversed second half
        let first = head;
        second = previous;
        while(second!=null){
            const temp1 = first.next;
            const temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}
