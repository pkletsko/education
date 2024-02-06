export function minDistancePlus_v2(word1, word2) {
    const memo = Array.from({ length: word1.length+1 }, () => Array(word2.length));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === word1.length ) {
            return word2.length - j;
        }

        if (j === word2.length) {
            return word1.length - i;
        }

        if (memo[i][j]) {
            return memo[i][j];
        }

        // if characters match continue
        if (word1[i] === word2[j]) {
            return memo[i][j] = dfs(i + 1, j + 1);
        }

        let min = Math.min(
            dfs(i, j +1),  // insert
            dfs(i + 1, j), // remove
            dfs(i + 1, j + 1) // replace
        ) + 1;

        return memo[i][j] = min;
    }

    return dfs(0, 0);
}
