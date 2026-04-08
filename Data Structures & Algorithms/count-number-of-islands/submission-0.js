class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        if(!grid || grid.length === 0) return 0;

        let rows = grid.length;
        let cols = grid[0].length;
        let count=0 // iniitial number of islands

        const dfs = (row, col) =>{
            //out of bounds + water check
            if(row<0 || col<0 || row>=rows || col>=cols || grid[row][col] === "0"){
                return;
            }
            //mark visited, flood fill
            // mark grid itself to save space for visited array

            grid[row][col] = "0";

            //check all directions
            dfs(row+1, col);
            dfs(row-1, col);
            dfs(row, col-1);
            dfs(row, col+1)
        }


        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(grid[row][col] === '1'){ //if island found
                    count++;
                    dfs(row, col) //sink Island
                }
            }
        }
        return count;
    }
}
