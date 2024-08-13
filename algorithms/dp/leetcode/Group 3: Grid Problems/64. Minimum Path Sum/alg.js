/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let dp = Array(rows).fill().map(() => Array(cols).fill(0));


    dp[0][0] = grid[0][0];

    // Minimum path sum for the first row
    for (let c = 1; c < cols; c++) {
        dp[0][c] = dp[0][c - 1] + grid[0][c];
    }

    // Minimum path sum for the first column
    for (let r = 1; r < rows; r++) {
        dp[r][0] = dp[r - 1][0] + grid[r][0];
    }


    for(let row = 1; row < rows; row++) {
        for(let col = 1; col < cols; col++) {
            let top = dp[row - 1][col];
            let left = dp[row][col - 1];

            dp[row][col] = Math.min(top, left) + grid[row][col];
        }
    }

    return dp[rows - 1][cols - 1];
};
