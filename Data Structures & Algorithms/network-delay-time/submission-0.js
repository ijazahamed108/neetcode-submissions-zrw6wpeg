class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
         const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, t] of times) {
        graph[u].push([v, t]);
    }

    // dist[i] = shortest time for node i to receive signal
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;

    // Min-heap: [cost, node] — JS has no built-in, simulate with sorted array
    // For n<=100, times<=1000, this is fine
    const heap = [[0, k]];

    while (heap.length) {
        // Pop minimum cost entry
        heap.sort((a, b) => a[0] - b[0]);
        const [cost, node] = heap.shift();

        // Stale entry — already found a better path
        if (cost > dist[node]) continue;

        for (const [neighbor, weight] of graph[node]) {
            const newCost = cost + weight;
            if (newCost < dist[neighbor]) {
                dist[neighbor] = newCost;
                heap.push([newCost, neighbor]);
            }
        }
    }

    // Check all nodes 1..n are reachable, return max distance
    const result = Math.max(...dist.slice(1));
    return result === Infinity ? -1 : result;
    }
}
