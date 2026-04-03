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
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            // find kth node from groupPrev
            const kth = this.getKthNode(groupPrev, k);
            if (kth === null) break;

            const groupNext = kth.next;

            // reverse current group
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                const temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // reconnect reversed group
            const oldGroupStart = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = oldGroupStart;
        }

        return dummy.next;
    }

    getKthNode(curr, k) {
        while (curr !== null && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
