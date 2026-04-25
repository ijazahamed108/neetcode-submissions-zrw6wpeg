class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
       
         // Build adjacency list
    const graph = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const visited = new Set();
    let components = 0;
    
    const dfs = (node) => {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    };
    
    // Try to start DFS from each unvisited node
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            components++;
        }
    }
    
    return components;
}}
