class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
       
    const graph = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const visited = new Set();
    let components = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            // BFS
            const queue = [i];
            visited.add(i);
            
            while (queue.length) {
                const node = queue.shift();
                for (const neighbor of graph[node]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            
            components++;
        }
    }
    
    return components;
}}
