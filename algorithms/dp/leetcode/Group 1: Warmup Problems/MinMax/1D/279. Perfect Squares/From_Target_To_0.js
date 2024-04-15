export function numSquaresMinus(target) {
    // key/value store (memoization)
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(sum) {
        // termination condition
        // we stop recursion and return 0 since counter of squares will be located after recursion call
        if (sum === 0) {
            return 0;
        }

        // termination condition
        // If we overshoot (sum is less than 0),
        // then we will return Infinity since we will not count this move.
        if (sum < 0) {
            return Infinity;
        }

        // get already calculated value
        if (memo[sum]) {
            return memo[sum];
        }

        // aggregate variable with default largest possible value
        let aggregateResult = Infinity;

        // iterate only squares which is less than current sum
        for(let square = 1; square * square <= sum; square++ ) {
            // compose perfect square
            const pSquare = square * square;
            // recursion call with new sum
            const result = dfs(sum - pSquare);
            // keeping min number of perfect squares to build current sum
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        // memoization of aggregated result
        return memo[sum] = aggregateResult;
    }

    // init recursion from target
    return dfs(target);
}
