export function numSquaresMinus(target) {
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(sum) {
        if (sum === 0) {
            return 0;
        }

        if (sum < 0) {
            return Infinity;
        }

        if (memo[sum]) {
            return memo[sum];
        }

        let aggregateResult = Infinity;

        for(let square = 1; square * square <= sum; square++ ) {
            let pSquare = square * square;
            let result = dfs(sum - pSquare);
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        return memo[sum] = aggregateResult;
    }

    return dfs(target);
}
