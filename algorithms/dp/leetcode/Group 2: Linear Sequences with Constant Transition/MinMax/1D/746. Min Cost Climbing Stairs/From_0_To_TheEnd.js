export function minCostClimbingStairsPlus(nums) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(index) {
        if (index >= nums.length) {
            return 0;
        }

        if (memo[index]) {
            return memo[index];
        }

        let aggregateResult = Math.min(
            dfs(index + 1),
            dfs(index + 2)
        ) + nums[index];

        return memo[index] = aggregateResult;
    }

    return Math.min(dfs(0), dfs(1));
}
