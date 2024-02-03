export function longestCommonSubsequencePlus(text1, text2) {
    const rows = text1.length + 1;
    const columns = text2.length + 1;
    const memo = Array.from(Array(rows), () => new Array(columns).fill(-1));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === text1.length || j === text2.length) {
            return 0;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        if (text1[i] === text2[j]) {
            return memo[i][j] = dfs(i + 1, j + 1) + 1;
        }

        return memo[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
    }

    // start
    return dfs(0, 0);
}
