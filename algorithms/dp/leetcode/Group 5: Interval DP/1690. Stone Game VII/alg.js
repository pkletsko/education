export function stoneGameVII(nums) {
    const rows = nums.length + 1;
    const columns = nums.length + 1;
    const memo = Array.from(Array(rows), () => Array(columns));
    // path construction from both sides Begin [>--------<] End
    // memo will be filled:              Left Bottom corner [>--------] Right Top corner

    // Compute prefix sum of coins
    const prefixSum = Array(nums.length + 1);
    prefixSum[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    function dfs(start, end, alice) {
        if (start === end) {
            return 0;
        }
        if (memo[start][end]) {
            return memo[start][end];
        }

        let difference;
        const scoreRemoveFirst = prefixSum[end + 1] - prefixSum[start + 1];
        const scoreRemoveLast = prefixSum[end] - prefixSum[start];

        if (alice) {
            difference = Math.max(
                dfs(start + 1, end, !alice) + scoreRemoveFirst,
                dfs(start, end - 1, !alice) + scoreRemoveLast
            );
        } else {
            difference = Math.min(
                dfs(start + 1, end, !alice) - scoreRemoveFirst,
                dfs(start, end - 1, !alice) - scoreRemoveLast
            );
        }

        return memo[start][end] = difference;
    }

    // start
    return Math.abs(dfs(0, nums.length - 1, true));
}
