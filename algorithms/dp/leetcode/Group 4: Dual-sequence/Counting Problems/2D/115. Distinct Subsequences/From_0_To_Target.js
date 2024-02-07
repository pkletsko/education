export function numDistinctPlus(s, t) {
    let memo = Array.from(Array(s.length + 1), ()=> new Array(t.length + 1).fill(-1));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === s.length && j === t.length) {
            return 1;
        }

        if (i >= s.length) {
            return 0;
        }

        if(memo[i][j] !== -1) {
            return memo[i][j];
        }

        let count = 0;

        if (s[i] === t[j]) {
            count += dfs(i + 1, j + 1);
        }

        count += dfs(i + 1, j);

        return memo[i][j] = count;
    }

    return dfs(0, 0);
}
