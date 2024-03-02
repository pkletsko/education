export function stoneGame(nums) {
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

    function dfs(l, r) {
        if (memo[l][r]) {
            return memo[l][r];
        }

        // Calculate total coins value from l to r
        const sum = prefixSum[r] - prefixSum[l];
        // console.log(l , r);
        // console.log("sum : " + sum);

        if (l === r) {
            memo[l][r] = sum;
        } else {
            const maxOpponentPointsFromRight = dfs(l + 1, r);
            const maxOpponentPointsFromLeft = dfs(l, r - 1);
            memo[l][r] = sum - Math.min(maxOpponentPointsFromRight, maxOpponentPointsFromLeft);
        }

        return memo[l][r];
    }

    let result = dfs(0, nums.length);
    //console.log("Alice Top score = " + result);
    let halfOfAll = Math.floor(prefixSum[prefixSum.length -1] / 2);
    //console.log("half of all = " + halfOfAll);
    // start
    return result > halfOfAll;
}
