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
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(row, col) {
        if (row >= rows || col >= cols || grid[row][col] === 1) {
            return Infinity;
        }

        if(row === rows - 1 && col === cols -1) {
            return 1;
        }

        let right = dfs(row, col + 1);
        //let left = dfs(row, col - 1);
        let down = dfs(row + 1, col);
        //let up = dfs(row - 1, col);
        let diagonalDown = dfs(row + 1, col + 1);
        //let diagonalUp = dfs(row - 1, col - 1);

        return Math.min( right, down, diagonalDown) + 1;

    }

    const res = dfs(0, 0);

    return res === Infinity ? -1 : res;

};
