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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        const dummy = new ListNode();
        let curr = dummy;

        let carry = 0;

        while(l1 || l2 || carry){

            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ?l2.val :0;

            let value = v1+v2+carry;
            let valueWithOutCarry = value %10;
            carry = Math.floor(value/10);
            curr.next = new ListNode(valueWithOutCarry);
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return dummy.next;
    }
}
