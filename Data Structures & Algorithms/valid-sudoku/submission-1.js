class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

            // create a set
            // create unique keys for each cell
            // cell includes rowKey, colKey and boxkey 
            // box key is where the cell is currently in 
            // box location formula Math.floor(row/3) + Math.floor(col/3);
            // skip the empty "." cells in iteration
            let set = new Set();

            for (let row =0; row< board.length; row++){
                for (let col = 0; col<board[row].length; col++){
                    let cellValue = board[row][col];
                    if (cellValue !== "."){
                        const rowKey = "row"+row+cellValue;
                        const colKey = "col"+col+cellValue;
                        const boxKey = "box"+Math.floor(row/3)+Math.floor(col/3)+cellValue;

                        if (set.has(rowKey) || set.has(colKey) || set.has(boxKey)){
                            return false;
                        }
                        set.add(rowKey)
                        set.add(colKey)
                        set.add(boxKey);
                    }
                }
            }
            return true;
    }
}
