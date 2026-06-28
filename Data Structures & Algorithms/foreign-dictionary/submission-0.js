class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
         // Step 1: Initialize graph - every unique char is a node
  const adj = new Map();      // char -> Set of chars that come after it
  const inDegree = new Map(); // char -> number of incoming edges
  for (const word of words) {
    for (const ch of word) {
      if (!adj.has(ch)) {
        adj.set(ch, new Set());
        inDegree.set(ch, 0);
      }
    }
  }
  // Step 2: Build edges by comparing adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    // Invalid case: "abc" before "ab" (prefix rule violation)
    if (w1.length > w2.length && w1.startsWith(w2)) {
      return "";
    }
    // Find first differing character
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj.get(w1[j]).has(w2[j])) {
          adj.get(w1[j]).add(w2[j]);   // w1[j] comes before w2[j]
          inDegree.set(w2[j], inDegree.get(w2[j]) + 1);
        }
        break; // only the FIRST difference matters
      }
    }
  }
  // Step 3: Kahn's algorithm (BFS topological sort)
  const queue = [];
  for (const [ch, deg] of inDegree) {
    if (deg === 0) queue.push(ch);
  }
  let result = "";
  while (queue.length > 0) {
    const ch = queue.shift();
    result += ch;
    for (const next of adj.get(ch)) {
      inDegree.set(next, inDegree.get(next) - 1);
      if (inDegree.get(next) === 0) queue.push(next);
    }
  }
  // Step 4: If we didn't use all chars, there's a cycle -> invalid
  return result.length === inDegree.size ? result : "";
    }
}
