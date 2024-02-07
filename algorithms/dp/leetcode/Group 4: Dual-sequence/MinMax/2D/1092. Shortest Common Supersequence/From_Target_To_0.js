export function shortestCommonSupersequenceMinus(word1, word2) {
    const memo = Array.from(Array(word1.length + 1), ()=> new Array(word2.length + 1));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i, j) {
        if (i < 0 && j < 0) {
            return "";
        }

        if (i < 0 ) {
            return word2.slice(j);
        }

        if (j < 0) {
            return word1.slice(i);
        }

        if (memo[i][j]) {
            return memo[i][j];
        }

        let result;
        if (word1[i] === word2[j]) {
            result = word1[i] + dfs(i - 1, j - 1);
        } else {
            const takeFromWord1 = word1[i] + dfs(i - 1, j);
            const takeFromWord2 = word2[j] + dfs(i, j - 1);
            result = takeFromWord1.length > takeFromWord2.length ? takeFromWord2 : takeFromWord1;
        }

        return memo[i][j] = result;
    }

    return dfs(word1.length - 1, word1.length - 1);
}
