class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if(strs[0] === "" && strs.length === 1){
            return [[""]]
        }
        let map = new Map();
        for (let i=0; i< strs.length; i++){
            const currSortedStr = strs[i].split('').sort().join('');
            if(map.has(currSortedStr)){
                map.set(currSortedStr,[...map.get(currSortedStr), strs[i]] )
            } else {
               map.set(currSortedStr, [strs[i]])
            }
               
        }
        const answer = [];
        for ( let values of map.values()){
            answer.push(values)
        }
        return answer;
    }
}
