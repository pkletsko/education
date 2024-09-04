/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
 * Example 2:
 *
 * Input: n = 1
 * Output: [["Q"]]
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];

    // Function to check if it's valid to place a queen at board[row][col]
    function isValid(board, row, col) {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }

        // Check the diagonal (top-left)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        // Check the diagonal (top-right)
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }

        return true;
    }

    // Backtracking function
    function dfs(board, row) {
        if (row === n) {
            res.push(board.map(r => r.join('')));
            return;
        }

        // Try placing a queen in every column of the current row
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';  // Place queen
                dfs(board, row + 1);    // Move to the next row
                board[row][col] = '.';  // Backtrack
            }
        }
    }

    // Initialize the board
    const initBoard = Array(n).fill().map(() => Array(n).fill('.'));

    dfs(initBoard, 0);

    return res;
};
