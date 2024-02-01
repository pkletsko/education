export function houseRobberMinus(nums) {
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(robIndex) {
        if (robIndex < 0) { // we cannot ignore the case when robIndex === 0
            return 0;
        }

        if (memo[robIndex]) {
            return memo[robIndex];
        }

        let aggregateResult = Math.max(
            dfs(robIndex - 1),
            dfs(robIndex - 2) + nums[robIndex]
        );

        return memo[robIndex] = aggregateResult;
    }

    return dfs(nums.length - 1);
}
