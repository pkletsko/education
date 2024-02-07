export function shortestCommonSupersequenceMinus(word1, word2) {
    const memo = Array.from(Array(word1.length), () => Array(word2.length));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i, j) {
        if (i < 0 && j < 0) {
            return "";
        }

        if (i < 0) {
            return word2.slice(0, j + 1);
        }

        if (j < 0) {
            return word1.slice(0, i + 1);
        }

        if (memo[i][j]) {
            return memo[i][j];
        }

        let result;
        if (word1[i] === word2[j]) {
            result = dfs(i - 1, j - 1) + word1[i];
        } else {
            const takeFromWord1 = dfs(i - 1, j) + word1[i];
            const takeFromWord2 = dfs(i, j - 1) + word2[j];
            result = takeFromWord1.length > takeFromWord2.length ? takeFromWord2 : takeFromWord1;
        }

        return memo[i][j] = result;
    }

    return dfs(word1.length - 1, word2.length - 1);
}
