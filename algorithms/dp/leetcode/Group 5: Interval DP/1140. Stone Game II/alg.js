export function stoneGameII(nums) {
    const rows = nums.length + 1;
    const columns = nums.length + 1;
    const memo = Array.from(Array(rows), () => Array(columns * 2));
    // path construction from both sides Begin [>--------<] End
    // memo will be filled:              Left Bottom corner [>--------] Right Top corner

    // Compute prefix sum of coins
    const prefixSum = Array(nums.length + 1);
    prefixSum[0] = 0;
    for (let i = 1; i <= nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    function dfs(start, m) {
        //console.log(start, m);
        if (start >= nums.length) {
            return 0;
        }

        if (memo[start][m]) {
            return memo[start][m];
        }

        // Calculate total coins value from l to r
        const sum = prefixSum[nums.length] - prefixSum[start];
        //console.log("sum = " + sum);

        let min = Infinity;

        for(let x = 1; x <= 2 * m; x++) {
            let newM = Math.max(m, x);

            let res = dfs(start + x, newM);

            min = Math.min(min, res);

        }


        return memo[start][m] = sum - min;
    }

    //1 <= X <= 2M.  Then, we set M = max(M, X).

    // start
    return dfs(0, 1);
}
