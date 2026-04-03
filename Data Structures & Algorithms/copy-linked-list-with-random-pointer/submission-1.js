// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        const map = new Map();

        let temp = head;

        // First pass: create copy nodes
        while (temp) {
            map.set(temp, new Node(temp.val));
            temp = temp.next;
        }

        temp = head;

        // Second pass: connect next and random
        while (temp) {

            const copy = map.get(temp);

            copy.next = temp.next ? map.get(temp.next) : null;
            copy.random = temp.random ? map.get(temp.random) : null;

            temp = temp.next;
        }

        return map.get(head);
    }
}
