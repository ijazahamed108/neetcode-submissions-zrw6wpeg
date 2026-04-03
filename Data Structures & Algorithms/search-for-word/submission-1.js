class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
         if(!word || word.length === 0) {
            return false
        }

        const rows = board.length;
        const cols = board[0].length;

        const dfs = (row, col, index)=>{
            //Found
            if(index === word.length) return true;
            //invalid cases, out of bounds
            if(row<0 || col <0 || row>=rows || col >= cols || board[row][col]!== word[index]) return false;
            //preserve current value and mark it as visited in board
            const temp = board[row][col];
            board[row][col] = "#";

            //Check in all four directions to find the next character in word
            const found = dfs(row+1, col, index+1) || dfs(row-1, col, index+1) || dfs(row, col+1, index+1) || dfs(row, col-1, index+1)
            
            //reset board value
             //backtrack
            board[row][col] = temp;
            return found;

        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(dfs(i,j,0)){
                    return true;
                }
            }
        }
        return false;
    }
}
