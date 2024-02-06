export function minDistancePlus(word1, word2) {
    let memo = Array.from(Array(word1.length), ()=> new Array(word2.length).fill(-1));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === word1.length ) {
            return word2.length - j;
        }

        if (j === word2.length) {
            return word1.length - i;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        let cost = 0;

        if (word1[i] !== word2[j]) {
            cost = 1;
        }

        let min = Math.min(
            dfs(i, j +1) + 1,
            dfs(i + 1, j) + 1,
            dfs(i + 1, j + 1) + cost
        );

        return memo[i][j] = min;
    }

    return dfs(0, 0);
}
