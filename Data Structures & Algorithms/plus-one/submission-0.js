class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let str = "";
        digits.forEach(char=>{
            str+=char
        })
        let numric = parseInt(str)+1;
        return numric.toString().split().join();
        
    }
}
