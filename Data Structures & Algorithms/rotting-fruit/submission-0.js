class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
    const totalRows = grid.length;
    const totalCols = grid[0].length;

    const EMPTY = 0;
    const FRESH = 1;
    const ROTTEN = 2;

    const bfsQueue = [];         // Holds all currently rotten orange positions
    let remainingFreshCount = 0; // Track how many fresh oranges are left
    let minutesElapsed = 0;      // Track how many minutes have passed

    // ─────────────────────────────────────────────
    // Step 1: Scan grid → collect rotten oranges
    //         into queue and count fresh oranges
    // ─────────────────────────────────────────────
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            if (grid[row][col] === ROTTEN) {
                bfsQueue.push([row, col]);       // Rotten orange is a BFS source
            } else if (grid[row][col] === FRESH) {
                remainingFreshCount++;           // Count fresh oranges
            }
        }
    }

    // ─────────────────────────────────────────────
    // Step 2: Define 4 directional neighbors
    //         (up, down, left, right)
    // ─────────────────────────────────────────────
    const neighborDirections = [
        [-1,  0],  // up
        [ 1,  0],  // down
        [ 0, -1],  // left
        [ 0,  1],  // right
    ];

    // ─────────────────────────────────────────────
    // Step 3: BFS — spread rot minute by minute
    //         Each while-loop iteration = 1 minute
    // ─────────────────────────────────────────────
    while (bfsQueue.length > 0 && remainingFreshCount > 0) {

        // All oranges currently in the queue rot their neighbors THIS minute
        const orangesRottingThisMinute = bfsQueue.length;

        for (let i = 0; i < orangesRottingThisMinute; i++) {
            const [currentRow, currentCol] = bfsQueue.shift();

            // Check all 4 neighbors
            for (const [rowOffset, colOffset] of neighborDirections) {
                const neighborRow = currentRow + rowOffset;
                const neighborCol = currentCol + colOffset;

                const isWithinGrid =
                    neighborRow >= 0 && neighborRow < totalRows &&
                    neighborCol >= 0 && neighborCol < totalCols;

                const isFreshOrange = grid[neighborRow]?.[neighborCol] === FRESH;

                // Rot the fresh neighbor and add it to queue for next minute
                if (isWithinGrid && isFreshOrange) {
                    grid[neighborRow][neighborCol] = ROTTEN;  // Mark as rotten
                    remainingFreshCount--;                    // One less fresh orange
                    bfsQueue.push([neighborRow, neighborCol]); // Spreads next minute
                }
            }
        }

        minutesElapsed++; // One full minute of spreading done
    }

    // ─────────────────────────────────────────────
    // Step 4: If fresh oranges remain → impossible
    //         Otherwise return total minutes taken
    // ─────────────────────────────────────────────
    const allOrangesRotted = remainingFreshCount === 0;
    return allOrangesRotted ? minutesElapsed : -1;

    }
}
