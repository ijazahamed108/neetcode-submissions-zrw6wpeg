class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const visited = new Array(n).fill(false);
        const minCost = new Array(n).fill(Infinity);
        
        minCost[0] = 0; // Start from point 0
        let totalCost = 0;
        let edgesUsed = 0;
        
        while (edgesUsed < n) {
            // Find unvisited point with minimum cost
            let currPoint = -1;
            let currMinCost = Infinity;
            
            for (let i = 0; i < n; i++) {
                if (!visited[i] && minCost[i] < currMinCost) {
                    currMinCost = minCost[i];
                    currPoint = i;
                }
            }
            
            // Add this point to MST
            visited[currPoint] = true;
            totalCost += currMinCost;
            edgesUsed++;
            
            // Update costs to all unvisited neighbors
            for (let nextPoint = 0; nextPoint < n; nextPoint++) {
                if (!visited[nextPoint]) {
                    const cost = Math.abs(points[currPoint][0] - points[nextPoint][0]) +
                                Math.abs(points[currPoint][1] - points[nextPoint][1]);
                    minCost[nextPoint] = Math.min(minCost[nextPoint], cost);
                }
            }
        }
        
        return totalCost;
    }
}
