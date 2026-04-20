class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
         if (!heights.length) return [];
    
    const m = heights.length, n = heights[0].length;
    const pac = Array.from({length: m}, () => Array(n).fill(false));
    const atl = Array.from({length: m}, () => Array(n).fill(false));
    
    const dfs = (i, j, ocean) => {
        ocean[i][j] = true;
        [[0,1],[1,0],[0,-1],[-1,0]].forEach(([di, dj]) => {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && 
                !ocean[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                dfs(ni, nj, ocean);
            }
        });
    };
    
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pac);
        dfs(i, n - 1, atl);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pac);
        dfs(m - 1, j, atl);
    }
    
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pac[i][j] && atl[i][j]) result.push([i, j]);
        }
    }
    return result;
    }
}
