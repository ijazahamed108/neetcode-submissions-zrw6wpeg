class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
         let rows = heights.length;
    let cols = heights[0].length;

    let pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    let atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    function dfs(r, c, visited) {
        visited[r][c] = true;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            if (
                nr >= 0 && nc >= 0 && nr < rows && nc < cols &&
                !visited[nr][nc] &&
                heights[nr][nc] >= heights[r][c]
            ) {
                dfs(nr, nc, visited);
            }
        }
    }

    // Pacific (top + left)
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific);
        dfs(rows - 1, c, atlantic);
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific);
        dfs(r, cols - 1, atlantic);
    }

    let result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
    }
}
