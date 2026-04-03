class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let encoded = "";
        for (let str of strs){
            encoded = encoded + str.length+":"+str;
        }
        console.log(encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
            let position = 0;
            let result = [];
            while (position < str.length){
                let colIndex = str.indexOf(":", position);
                let length = parseInt(str.substring(position, colIndex));
                let char = str.substring(colIndex+1, colIndex+1+length);
                result.push(char);
                position = colIndex+1+length;
            }
            return result;

    }
}
