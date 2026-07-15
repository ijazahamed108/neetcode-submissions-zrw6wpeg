class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let start=0;
        let end = 0;
        let partitions = [];

        let lastIndexMap = {};
        for(let i=0; i<S.length;i++){
            const letter = S[i];
            const lastIndexOfLetter = S.lastIndexOf(letter);
            lastIndexMap[letter] = lastIndexOfLetter;
        }
        
        for(let i=0;i<S.length;i++){
            const letter = S[i];
            end = Math.max(end, lastIndexMap[letter]);

            if(end === i){
                partitions.push(end - start +1);
                start = i+1;
            }
        }
        return partitions;
    }
}
