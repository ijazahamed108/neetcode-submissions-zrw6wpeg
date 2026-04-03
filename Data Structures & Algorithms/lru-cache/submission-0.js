class Node {

    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }
    remove(node){
        const previous = node.prev;
        const nextNode = node.next;
        previous.next = nextNode;
        nextNode.prev = previous;
    }

 //initially left and right
 // this.left -> this.right
 // this.left <- this.right  
    insert(node){
        const previous = this.right.prev;
        previous.next = node;
        node.prev = previous;
        node.next = this.right;
        this.right.prev = node;

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            this.remove(this.cache.get(key))
        }
        const newNode = new Node(key,value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.capacity){
            const LRU = this.left.next;
            this.remove(LRU);
            this.cache.delete(LRU.key)
        }

    }
}
