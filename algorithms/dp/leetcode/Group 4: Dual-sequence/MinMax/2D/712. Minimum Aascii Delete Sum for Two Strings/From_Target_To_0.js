export function minimumDeleteSumMinus(s1, s2) {
    const memo = Array.from(Array(s1.length), ()=> new Array(s2.length).fill(-1));
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(i ,j) {
        if (i < 0) {
            let sum = 0;
            for(let start = j; start >= 0; start--) {
                sum += s2.charCodeAt(start);
            }
            return sum;
        }

        if (j < 0) {
            let sum = 0;
            for(let start = i; start >= 0; start--) {
                sum += s1.charCodeAt(start);
            }
            return sum;
        }

        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        if (s1[i] === s2[j]) {
            return memo[i][j] = dfs(i - 1, j - 1);
        }

        let min = Math.min(dfs(i - 1, j) + s1.charCodeAt(i), dfs(i, j - 1) + s2.charCodeAt(j));

        return memo[i][j] = min;
    }

    return dfs(s1.length - 1, s2.length - 1);
}
