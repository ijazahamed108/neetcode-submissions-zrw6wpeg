class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(rooms) {
        if (!rooms.length) return;

    let rows = rooms.length;
    let cols = rooms[0].length;

    let queue = [];

    // Step 1: Add all gates to queue
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r, c]);
            }
        }
    }

    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    // Step 2: BFS
    while (queue.length > 0) {
        let [r, c] = queue.shift();

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            // Check boundaries and only update INF cells
            if (
                nr >= 0 && nc >= 0 &&
                nr < rows && nc < cols &&
                rooms[nr][nc] === 2147483647
            ) {
                rooms[nr][nc] = rooms[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
    }
}
