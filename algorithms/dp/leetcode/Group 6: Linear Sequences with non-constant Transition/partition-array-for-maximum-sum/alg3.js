var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = {};


    function dfs(start) {

        if (start === n) return 0;
        if (dp[start]) return dp[start];

        let len = 0;
        let maxi = 0;
        let maxAns = 0;

        const end = Math.min(start + k, arr.length);
        for (let i = start; i < end; i++) {
            len++;
            maxi = Math.max(maxi, arr[i]);
            const sum = len * maxi + dfs(i + 1);
            maxAns = Math.max(maxAns, sum);
        }

        dp[start] = maxAns;
        return dp[start];
    };

    return dfs(0);
};


