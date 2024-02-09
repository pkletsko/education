export function longestPalindromeSubseqTimeLimit(s) {
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

        let totalMax = 0

        // How not to think about this problem !!!
        for(let index = start; index <= end; index++) {
            let result = 0;
            if (index !== end && s[index] === s[end]) {
                result = dfs(index + 1, end - 1) + 2;
            } else {
                result = Math.max(dfs(index + 1, end), dfs(index, end - 1));
            }

            totalMax = Math.max(totalMax, result);
        }

        return memo[start][end] = totalMax;
    }

    return dfs(0, s.length - 1);
}
