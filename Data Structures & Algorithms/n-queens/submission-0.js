class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        if(n===1) return [['Q']];

        const result = [];
        const board = Array.from({length:n}, ()=>Array(n).fill("."));
        const cols = new Set();
        const diag = new Set(); //row-col
        const antiDiag = new Set(); //row+col

        function backtrack(row){
            if(row === n ){
                //Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
                result.push(board.map( r=> r.join("")))
                return;
            }
            for(let col=0;col<n;col++){
                // conflict check , if found move to next place
                if(cols.has(col) || diag.has(row-col) || antiDiag.has(row+col)){
                    continue;
                }
                //place Queen and mark the positions
                board[row][col]="Q";
                cols.add(col);
                diag.add(row-col);
                antiDiag.add(row+col);

                backtrack(row+1);

                board[row][col] = ".";
                cols.delete(col);
                diag.delete(row-col);
                antiDiag.delete(row+col);
            }

        }

        backtrack(0);
        return result;
    }
}
