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
         // Tree must have exactly n-1 edges
    if (edges.length !== n - 1) return false;
    
    // Union-Find
    const parent = Array.from({length: n}, (_, i) => i);
    
    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return false; // Cycle detected
        parent[rootX] = rootY;
        return true;
    };
    
    for (const [u, v] of edges) {
        if (!union(u, v)) return false;
    }
    
    return true;
}
}
