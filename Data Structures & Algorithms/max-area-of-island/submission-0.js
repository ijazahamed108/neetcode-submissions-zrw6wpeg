class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
    
        let totalRows = grid.length;
        let totalCols = grid[0].length;
        let maxArea = 0;

        function dfs(row, col){
            let area=1;
            if(row < 0 || col < 0 || row>=totalRows || col >=totalCols || grid[row][col]===0){
                return 0;
            }
            grid[row][col] = 0;
            area = area+dfs(row+1, col);
            area = area+dfs(row-1, col);
            area = area+dfs(row, col-1);
            area = area+dfs(row, col+1);
    
            return area;
        }


        for (let row = 0; row<totalRows; row++){
            for (let col =0; col<totalCols;col++){
                if(grid[row][col] === 1){
                    let area = dfs(row, col);
                    maxArea = Math.max(area, maxArea)
                }
            }
        }
        return maxArea;
    }
}
