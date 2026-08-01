class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length; //rows
        const n = matrix[0].length; // cols
        
        let firstRowHasZero = false;
        let firstColHasZero = false;

        // 1. Check if the first row or first column has any original zeroes
        for (let j = 0; j < n; j++) {
            if (matrix[0][j] === 0) {
                firstRowHasZero = true;
                break;
            }
        }
        
        for (let i = 0; i < m; i++) {
            if (matrix[i][0] === 0) {
                firstColHasZero = true;
                break;
            }
        }

        // 2. Use the first row and column as markers for the rest of the matrix
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0; // Mark row
                    matrix[0][j] = 0; // Mark column
                }
            }
        }

        // 3. Update cells to zero based on the markers in the first row/col
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // 4. Finally, update the first row and column if they originally had zeroes
        if (firstRowHasZero) {
            for (let j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }

        if (firstColHasZero) {
            for (let i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
