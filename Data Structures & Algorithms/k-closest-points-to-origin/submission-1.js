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

            if (this.heap[parent][0] >= this.heap[i][0]) break;

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

            if (left < n && this.heap[left][0] > this.heap[largest][0]) {
                largest = left;
            }

            if (right < n && this.heap[right][0] > this.heap[largest][0]) {
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
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest (points, k) {
    const heap = new MaxHeap();

    for (let [x, y] of points) {
        let dist = x*x + y*y;

        heap.push([dist, [x, y]]);

        if (heap.size() > k) {
            heap.pop(); // remove farthest
        }
    }

    return heap.heap.map(item => item[1]);
};
}
