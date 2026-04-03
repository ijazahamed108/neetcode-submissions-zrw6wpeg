class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return [];
        let result = [];
        const map = {
        2: "abc", 3: "def", 4: "ghi",
        5: "jkl", 6: "mno", 7: "pqrs",
        8: "tuv", 9: "wxyz"
       };

        function backtrack(index, path){
            if(index === digits.length){
                result.push(path.join(""))// need to convert string to array and push array for back tracking
                return
            }
            const charactors = map[digits[index]]
            for (let char of charactors){
                path.push(char);
                backtrack(index+1, path);
                path.pop()
            }

        }

        backtrack(0, []);
        return result;
    }
}
