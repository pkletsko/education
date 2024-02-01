export function houseRobberPlus(nums) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(robIndex) {
        if (robIndex >= nums.length) {
            return 0;
        }

        if (memo[robIndex]) {
            return memo[robIndex];
        }

        let aggregateResult = Math.max(
            dfs(robIndex + 1),
            dfs(robIndex + 2) + nums[robIndex]
        );

        return memo[robIndex] = aggregateResult;
    }

    return dfs(0);
}
