class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    bubbleDown() {
        let i = 0;
        let n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
         const heap = new MaxHeap();

    // build heap
    for (let stone of stones) {
        heap.push(stone);
    }

    while (heap.size() > 1) {
        let y = heap.pop(); // largest
        let x = heap.pop(); // second largest

        if (y !== x) {
            heap.push(y - x);
        }
    }

    return heap.size() === 1 ? heap.peek() : 0;
    }
}
