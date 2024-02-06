export function minDistanceMinus(word1, word2) {
    let memo = Array.from(Array(word1.length + 1), ()=> new Array(word2.length + 1).fill(-1));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i, j) {
        if (i === 0 ) {
            return j;
        }

        if (j === 0) {
            return i;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        let cost = 0;

        if (word1[i-1] !== word2[j-1]) {
            cost = 1;
        }

        let min = Math.min(
            dfs(i, j - 1) + 1,
            dfs(i - 1, j) + 1,
            dfs(i - 1, j - 1) + cost
        );

        return memo[i][j] = min;
    }

    return dfs(word1.length, word2.length);
}
