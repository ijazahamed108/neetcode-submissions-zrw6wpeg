class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 1) return true;
        let nospCharString = s.replace(/[^a-zA-Z0-9]/g, '');
        
        const spaceLessString = nospCharString.split(" ").join("");
        const reversedSpaceLessString = spaceLessString.split("").reverse().join("");
    console.log(spaceLessString);
    console.log(reversedSpaceLessString)
        return spaceLessString.toLocaleLowerCase() === reversedSpaceLessString.toLocaleLowerCase();
        
    }
}
