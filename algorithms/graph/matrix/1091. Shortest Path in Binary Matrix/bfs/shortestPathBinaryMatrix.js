/**
 * Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
 *
 * A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 *
 * All the visited cells of the path are 0.
 * All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
 * The length of a clear path is the number of visited cells of this path.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[0,1],[1,0]]
 * Output: 2
 * Example 2:
 *
 *
 * Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
 * Output: 4
 * Example 3:
 *
 * Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
 * Output: -1
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;

    // Early exit if start or end is blocked
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return -1;
    }

    // Directions for moving in 8 possible ways (left, right, up, down and the 4 diagonals)
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],  // right, down, left, up
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
    ];

    // Queue to perform BFS
    const queue = [[0, 0, 1]]; // [row, col, distance]

    // Mark the start as visited by setting it to 1
    grid[0][0] = 1;

    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();

        // Check if we've reached the bottom-right corner
        if (row === n - 1 && col === n - 1) {
            return dist
        }

        // Explore all 8 directions
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            // Check if the new position is within bounds and is a valid path
            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] === 0) {
                queue.push([newRow, newCol, dist + 1]);
                grid[newRow][newCol] = 1; // Mark as visited
            }
        }
    }

    // If no path was found, return -1
    return -1;
};
