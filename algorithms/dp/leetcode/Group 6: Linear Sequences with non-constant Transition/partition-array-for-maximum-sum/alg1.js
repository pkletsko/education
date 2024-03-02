var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const dp = new Array(n).fill(-1);

    return helper(0, arr, k, dp);
};

const helper = function(ind, num, k, dp) {
    const n = num.length;
    if (ind === n) return 0;
    if (dp[ind] !== -1) return dp[ind];

    let len = 0;
    let maxi = Number.MIN_SAFE_INTEGER;
    let maxAns = Number.MIN_SAFE_INTEGER;

    for (let j = ind; j < Math.min(ind + k, n); j++) {
        len++;
        maxi = Math.max(maxi, num[j]);
        const sum = len * maxi + helper(j + 1, num, k, dp);
        maxAns = Math.max(maxAns, sum);
    }

    dp[ind] = maxAns;
    return dp[ind];
};
