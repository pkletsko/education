/**
 * @param {number[][]} grid
 * @return {number}
 */

export function minPathSum(grid){
    let rowSize = grid.length;
    let colSize = grid[0].length

    let dp = Array(rowSize).fill().map(() => Array(colSize).fill(null))

    function dfs(row, col) {

        if (row >= rowSize || row < 0 || col >= colSize || col < 0) {
            return Infinity;
        }

        if (dp[row][col] !== null) {
            return dp[row][col];
        }

        let currentPenalty = grid[row][col];

        let moveDown = dfs(row + 1, col);
        let moveRight = dfs(row, col + 1);

        let result;

        if (moveDown === Infinity && moveRight === Infinity) {
            result = currentPenalty;
        } else {
            result = Math.min(moveRight , moveDown) + currentPenalty;
        }

        return dp[row][col] = result;
    }

    return dfs(0,0);
}
