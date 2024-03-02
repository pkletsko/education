export function stoneGame_v3(nums) {
    const rows = nums.length;
    const columns = nums.length;
    const memo = Array.from(Array(rows), () => Array(columns));
    // path construction from both sides Begin [>--------<] End
    // memo will be filled:              Left Bottom corner [>--------] Right Top corner

    function dfs(l, r) {
        if (l > r) {
            return 0;
        }

        if (memo[l][r]) {
            return memo[l][r];
        }

        const selectFromLeft = nums[l];
        const maxPointsAfterLeftSelected = dfs(l + 1, r);
        const selectFromRight = nums[r];
        const maxPointsAfterRightSelected = dfs(l, r - 1);

       const leftMax = selectFromLeft - maxPointsAfterLeftSelected;
       const rightMax = selectFromRight - maxPointsAfterRightSelected;

        return memo[l][r] = Math.max(leftMax, rightMax);
    }

    // start
    let res = dfs(0, nums.length - 1) > 0;

    return res;
}
