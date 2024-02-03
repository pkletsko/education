export function longestCommonSubsequenceMinus(text1, text2) {
    const rows = text1.length + 1;
    const columns = text2.length + 1;
    const memo = Array.from(Array(rows), () => new Array(columns).fill(-1));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i, j) {
        if (i === 0 || j === 0) {
            return 0;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        if (text1[i - 1] === text2[j - 1]) {
            return memo[i][j] = dfs(i - 1, j - 1) + 1;
        }

        return memo[i][j] = Math.max(dfs(i - 1, j), dfs(i, j - 1));
    }

    // start
    return dfs(text1.length, text2.length);
}
