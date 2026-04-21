class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    // Time: O(totalRows × totalCols × 4^maxWordLength)
    // Space: O(total characters in all words)
    findWords(board, words) {
        const totalRows = board.length;
        const totalCols = board[0].length;
        const result = [];

        // build trie
        const root = {};
        for(const word of words){
            let node = root;
            for (const char of word){
                if(!node[char]) node[char] = {}; //if not create
                node = node[char] // move to new pos
            }
            node.word = word; 
        }
        // {
        //   b: { a: { t: { word: "bat" } } },
        //   c: { a: { t: { word: "cat" } } },
        //   s: { t: { a: { c: { k: { word: "stack" } } } } },
        //   // ... back, backend
        // }

        const dfs = (row, col, node) =>{
            const currentChar = board[row][col];
            if(!node[currentChar]) return; // if not present return
            node = node[currentChar] // if current char is present move to that pos in root
            if(node.word){
                result.push(node.word);
                delete node.word // delete to avaoid duplicates
            }
            board[row][col] =  "#" //mark visited
            const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            directions.forEach (([dRow, dCol])=>{
                const newRow = dRow+row;
                const newCol = dCol+col;
                if(newRow >=0 && newRow < totalRows && newCol>=0 && newCol < totalCols){
                    dfs(newRow, newCol, node)
                }
            })
            board[row][col]=currentChar; // refill


        }

        for(let row=0; row<totalRows; row++){
            for (let col=0; col<totalCols;col++){
                dfs(row, col,root)
            }
        }
        return result;

    }
}
