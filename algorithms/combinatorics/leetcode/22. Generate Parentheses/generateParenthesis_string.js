/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 *
 * Input: n = 1
 * Output: ["()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
export function generateParenthesis_string(n) {
    const res = [];

    function dfs(openedCount, closedCount, path) {
        if (openedCount === n && closedCount === n) {
            res.push(path);
        }

        if (openedCount < n) {
            dfs(openedCount + 1, closedCount, path + "(");
        }

        if (closedCount < openedCount) {
            dfs(openedCount, closedCount + 1, path + ")");
        }
    }

    dfs(0, 0, "");

    return res;
}
