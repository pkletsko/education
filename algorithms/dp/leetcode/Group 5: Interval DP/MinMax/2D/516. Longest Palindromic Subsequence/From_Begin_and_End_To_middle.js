export function longestPalindromeSubseq(s) {
    const memo = Array.from(Array(s.length), () => Array(s.length));

    function dfs(start, end) {
        if (start > end) {
            return 0;
        }

        if (start === end) {
            return 1;
        }

        if (memo[start][end]) {
            return memo[start][end];
        }

        let result;

        if (s[start] === s[end]) {
            result = dfs(start + 1, end - 1) + 2;
        } else {
            result = Math.max(dfs(start + 1, end), dfs(start, end - 1));
        }

        return memo[start][end] = result;
    }

    return dfs(0, s.length - 1);
}
