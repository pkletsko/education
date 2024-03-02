export function countSubstringsDP(s) {
    let n = s.length;
    let result = 0;

    if (n <= 0){
        return 0;
    }

    const memo = Array.from(Array(n), () => Array(n).fill(false));

    // Base case: single letter substrings
    for (let i = 0; i < n; ++i, result++){
        memo[i][i] = true;
    }

    // Base case: double letter substrings
    for (let i = 0; i < n - 1; i++) {
        memo[i][i + 1] = s[i] === s[i + 1];
        result += (memo[i][i + 1] ? 1 : 0);
    }

    // All other cases: substrings of length 3 to n
    for (let len = 3; len <= n; len++)
        for (let i = 0, j = i + len - 1; j < n; ++i, ++j) {
            memo[i][j] = memo[i + 1][j - 1] && s[i] === s[j];
            result += (memo[i][j] ? 1 : 0);
        }

    return result;
}
