class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let map = new Map();
        for (let i=0; i< numbers.length; i++){
            map.set( numbers[i], i);
        }
        console.log(map)
        let answer = [];
        for (let i=0; i<numbers.length; i++){
            let balance = target - numbers[i];
            if(map.has(balance)){
                answer.push(i+1, map.get(balance)+1)
            }
        }
        return answer.slice(0,2);
    }
}
