class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
         const freqMap = new Map();

    // Step 1: Count frequency
    for (let task of tasks) {
        freqMap.set(task, (freqMap.get(task) || 0) + 1);
    }

    // Step 2: Convert values to array
    const freqs = Array.from(freqMap.values());

    // Step 3: Find max frequency
    const maxFreq = Math.max(...freqs);

    // Step 4: Count how many have maxFreq
    let countMax = 0;
    for (let f of freqs) {
        if (f === maxFreq) countMax++;
    }

    // Step 5: Apply formula
    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + countMax
    );
    }
}
