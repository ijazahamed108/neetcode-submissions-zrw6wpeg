class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet  = new Set(wordList);
        if(!wordSet.has(endWord)) return 0;

        const visited = new Set([beginWord]);
        const queue = [[beginWord, 1]] // [word, level]

        while(queue.length){

            const [word, level] = queue.shift();
            for(let i=0;i<word.length;i++){
                for(let c=97;c<=122;c++){
                    const newChar = String.fromCharCode(c);
                    const newWord = word.slice(0,i)+newChar+word.slice(i+1);
                    if(newWord === endWord) return level+1;
                    if(wordSet.has(newWord) && !visited.has(newWord)){
                        visited.add(newWord);
                        queue.push([newWord, level+1]);
                    }

                }
            }
        }
        return 0;
    }
}
