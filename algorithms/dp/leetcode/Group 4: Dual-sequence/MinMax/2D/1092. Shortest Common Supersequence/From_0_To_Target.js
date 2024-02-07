export function shortestCommonSupersequencePlus(word1, word2) {
    const memo = Array.from(Array(word1.length), ()=> new Array(word2.length));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === word1.length && j === word2.length) {
            return "";
        }

        if (i === word1.length ) {
            return word2.slice(j, word2.length);
        }

        if (j === word2.length) {
            return word1.slice(i, word1.length);
        }

        if (memo[i][j]) {
            return memo[i][j];
        }

        let result;
        if (word1[i] === word2[j]) {
            result = word1[i] + dfs(i + 1, j + 1);
        } else {
            const takeFromWord1 = word1[i] + dfs(i + 1, j);
            const takeFromWord2 = word2[j] + dfs(i, j + 1);
            result = takeFromWord1.length > takeFromWord2.length ? takeFromWord2 : takeFromWord1;
        }

        return memo[i][j] = result;
    }

    return dfs(0, 0);
}
