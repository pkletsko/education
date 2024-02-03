export function lengthOfLISMinus(nums) {
    let max = 0;
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [Random order] End

    function dfs(start) {
        if (start === 0) {
            return 0;
        }

        if (memo[start]) {
            return memo[start];
        }

        let aggregateResult =  1; // begin with starting a new LIS

        for (let index = 1; index < start; index++) { // try building upon a pre-existing LIS
            let result = dfs(index); // compute dfs, otherwise it may never be computed
            if (nums[index - 1] < nums[start - 1]) {
                aggregateResult = Math.max(result + 1, aggregateResult);
            }
        }
        // LIS can end anywhere in the sequence due to the definition of our state, so update each time
        max = Math.max(max, aggregateResult);

        return memo[start] = aggregateResult;
    }

    // start
    dfs(nums.length)

    return max;
}
