var maxSumAfterPartitioning = function(arr, k) {
    const memo = {};

    function dfs(start) {
        if (start === arr.length) {
            return 0;
        }

        if (memo[start]) {
            return memo[start];
        }

        let len = 0;
        let max = 0;
        let res = 0;
        let end = Math.min(arr.length, start + k);
        for(let i = start; i < end; i++) {
            len++;
            max = Math.max(max , arr[i]);
            const tempV = max * len;

            res = Math.max(res, dfs(i + 1) + tempV);
        }

        return memo[start] = res;
    }

    return dfs(0);
};
