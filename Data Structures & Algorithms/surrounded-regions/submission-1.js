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
    
    const m = board.length, n = board[0].length;
    
    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;
        board[i][j] = 'T'; // Mark as temporary
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };
    
    // Mark border-connected 'O's
    for (let i = 0; i < m; i++) {
        dfs(i, 0);
        dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j);
        dfs(m - 1, j);
    }
    
    // Flip: 'O' → 'X', 'T' → 'O'
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] === 'T' ? 'O' : 'X';
        }
    }
    }
}
