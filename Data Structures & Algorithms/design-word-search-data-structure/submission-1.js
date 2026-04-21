class WordDictionary {
    constructor() {
        this.root = {};
    }
    
    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
    }
    
    search(word) {
        const dfs = (node, i) => {
            if (i === word.length) return !!node.isEnd;
            
            const char = word[i];
            if (char === '.') {
                for (const key in node) {
                    if (key !== 'isEnd' && dfs(node[key], i + 1)) return true;
                }
                return false;
            }
            
            return node[char] ? dfs(node[char], i + 1) : false;
        };
        
        return dfs(this.root, 0);
    }
}
