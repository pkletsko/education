export function numDistinctMinus(s, t) {
    let memo = Array.from(Array(s.length + 1), ()=> new Array(t.length + 1).fill(-1));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i, j) {
        if (j < 0) {
            return 1;
        }

        if (i < 0) {
            return 0;
        }

        if(memo[i][j] !== -1) {
            return memo[i][j];
        }

        let count = 0;

        if (s[i - 1] === t[j - 1]) {
            count += dfs(i - 1, j - 1);
        }

        count += dfs(i - 1, j);

        return memo[i][j] = count;
    }

    return dfs(s.length, t.length);
}
