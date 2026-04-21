
// addWord: O(n) where n = word length

// search: O(26^n) worst case with all dots, O(n) best case with no dots

// Space: O(total characters stored)
class WordDictionary {

    constructor() {
        this.root = {};
    }
//Example Add "bad"
//  node = root = {} initial
// if (!node['b']) node['b'] = {};  // 'b' doesn't exist, create it
// node = node['b'];                 // Move to 'b' node

// root
//  └─ b
//      └─ a: {}
//         ↑
//        node
//repeat
// {
//   b: {
//     a: {
//       d: { isEnd: true }
//     }
//   }
// }


    // Trie Structure:
    //      root
    //     / | \
    //    b  d  m
    //    |  |  |
    //    a  a  a
    //    |  |  |
    //    d* d* d*    (* = isEnd: true)

//     {
//   b: { a: { d: { isEnd: true } } },  
//   d: { a: { d: { isEnd: true } } },
//   m: { a: { d: { isEnd: true } } }
// }

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
            if (i === word.length) return node.isEnd ?? false;
            
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
