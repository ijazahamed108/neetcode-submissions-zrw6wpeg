class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {

        const rows = matrix.length;
        const cols = matrix[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const memo = Array(rows).fill().map(() => Array(cols).fill(-1));

        const recur = (row, col) => {
            if (memo[row][col] !== -1) return memo[row][col];

            let result = 1;
            for (let [r, c] of directions) {
                const newR = r + row;
                const newC = c + col;
                if (
                    newR >= 0 && newR < rows &&
                    newC >= 0 && newC < cols &&
                    matrix[newR][newC] > matrix[row][col]
                ) {
                    result = Math.max(
                        result,
                        1 + recur(newR, newC)
                    );
                }
            }

            memo[row][col] = result;
            return result;
        };

        let result = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                result = Math.max(result, recur(r, c));
            }
        }

        return result;
    }
}
