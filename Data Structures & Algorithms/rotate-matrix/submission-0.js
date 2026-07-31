class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //reverse matrix
        matrix.reverse();
        //transpose
        for(let i=0;i<matrix.length;i++){
            for(let j=i; j<matrix[i].length;j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    }
}
