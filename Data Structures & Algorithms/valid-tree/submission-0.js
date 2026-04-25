class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    // A valid tree must satisfy TWO conditions:
    // 1.Exactly n-1 edges (tree property)
    // 2.All nodes connected (no forest) + No cycles

    //     Valid Tree:        Not a Tree (cycle):    Not a Tree (disconnected):
    //     0                   0                       0---1
    //    /|\                 / \                      
    //   1 2 3               1---2                     2   3---4
    //   |                   |
    //   4                   3---4
    
    // 5 nodes, 4 edges    5 nodes, 5 edges        5 nodes, 3 edges
    // Connected ✓         Has cycle ✗             Disconnected ✗
    // No cycles ✓

    
    validTree(n, edges) {
         if (edges.length !== n - 1) return false;
    
    // Build adjacency list
    const graph = Array.from({length: n}, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // DFS to check connectivity
    const visited = new Set();
    
    const dfs = (node) => {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) dfs(neighbor);
        }
    };
    
    dfs(0);
    return visited.size === n;
    }
}
