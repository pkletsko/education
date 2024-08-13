/**
 * @param {number[][]} grid
 * @return {number}
 */

export function minPathSum(grid){
    let rowSize = grid.length;
    let colSize = grid[0].length

    function dfs(row, col) {

        if (row >= rowSize || row < 0 || col >= colSize || col < 0) {
            return Infinity;
        }


        let currentPenalty = grid[row][col];

        let moveDown = dfs(row + 1, col);
        let moveRight = dfs(row, col + 1);

        if (moveDown === Infinity && moveRight === Infinity) {
            return currentPenalty;
        }

        let result = Math.min(moveRight , moveDown) + currentPenalty;
        //console.log(row , col, " result = ", result);

        return result;
    }

    return dfs(0,0);
}
