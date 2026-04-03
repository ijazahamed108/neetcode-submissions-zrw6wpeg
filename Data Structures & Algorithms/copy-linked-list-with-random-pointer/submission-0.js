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

        // create first node
        let newHead = new Node(head.val);
        map.set(head, newHead); 

        let oldTemp = head.next;
        let newTemp = newHead;

        // create copy nodes
        while (oldTemp !== null){
            let copyNode = new Node(oldTemp.val);  
            map.set(oldTemp, copyNode);

            newTemp.next = copyNode;

            oldTemp = oldTemp.next;
            newTemp = newTemp.next;
        }

        // establish random connections
        oldTemp = head;
        newTemp = newHead;   

        while(oldTemp !== null){
            newTemp.random = oldTemp.random ? map.get(oldTemp.random) : null; 

            oldTemp = oldTemp.next;
            newTemp = newTemp.next;
        }

        return newHead;
    }
}
