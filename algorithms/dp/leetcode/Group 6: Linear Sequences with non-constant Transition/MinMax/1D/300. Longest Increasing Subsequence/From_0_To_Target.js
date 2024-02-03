export function lengthOfLISPlus(nums) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [Random order] End

    function dfs(start) {
        if (start === nums.length) {
            return 0;
        }

        if (memo[start]) {
            return memo[start];
        }

        let aggregateResult = 1;
        for(let index = start + 1; index < nums.length; index++) {
            if (nums[start] < nums[index]) { // pruning
                aggregateResult = Math.max( dfs(index) + 1, aggregateResult);
            }
        }

        return memo[start] = aggregateResult;
    }

    // start
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, dfs(i));
    }

    return max;
}
