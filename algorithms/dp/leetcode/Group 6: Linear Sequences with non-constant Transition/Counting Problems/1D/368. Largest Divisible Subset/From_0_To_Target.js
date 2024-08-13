export function largestDivisibleSubset(nums) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [Random order] End

    nums.sort();

    function dfs(start) {
        if (start === 0) { // Base case: the first number can always form a subset of size
            return 1;
        }

        if (memo[start]) {
            return memo[start];
        }

        let aggregateResult = 1;

        for(let index = 0; index < start; index++) {
            if (nums[start] % nums[index] === 0) { // pruning
                aggregateResult = Math.max(dfs(index) + 1, aggregateResult);
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
