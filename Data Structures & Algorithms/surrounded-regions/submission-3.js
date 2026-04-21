class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */


//     Board (m=4 rows, n=5 cols):
//      j=0  j=1  j=2  j=3  j=4
//    ┌────┬────┬────┬────┬────┐
// i=0│ X  │ X  │ X  │ X  │ X  │  ← Loop 2: dfs(0, j)
//    ├────┼────┼────┼────┼────┤
// i=1│ O  │ O  │ O  │ O  │ X  │
//    ├────┼────┼────┼────┼────┤
// i=2│ X  │ X  │ O  │ O  │ O  │
//    ├────┼────┼────┼────┼────┤
// i=3│ X  │ O  │ X  │ X  │ X  │  ← Loop 2: dfs(m-1, j)
//    └────┴────┴────┴────┴────┘
//      ↑                    ↑
// Loop 1:              Loop 1:
// dfs(i,0)            dfs(i,n-1)

    solve(board) {
          if (!board.length) return;
    
    const totalRows = board.length, totalCols = board[0].length;
    
    const dfs = (row, col) => {
        if (row < 0 || row >= totalRows || col < 0 || col >= totalCols || board[row][col] !== 'O') return;
        board[row][col] = 'T'; // Mark as temporary
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };
    
    // Mark border-connected 'O's
    for (let row = 0; row < totalRows; row++) {
        dfs(row, 0);
        dfs(row, totalCols - 1);
    }
    for (let col = 0; col < totalCols; col++) {
        dfs(0, col);
        dfs(totalRows - 1, col);
    }
    
    // Flip: 'O' → 'X', 'T' → 'O'
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            board[row][col] = board[row][col] === 'T' ? 'O' : 'X';
        }
    }
    }
}
