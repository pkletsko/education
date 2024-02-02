export function numSquaresPlus(target) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(sum) {
        if (sum === target) {
            return 0;
        }

        if (sum > target) {
            return Infinity;
        }

        if (memo[sum]) {
            return memo[sum];
        }

        let aggregateResult = Infinity;

        for(let square = 1; square * square <= target - sum; square++ ) {
            let pSquare = square * square;
            let result = dfs(sum + pSquare);
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        return memo[sum] = aggregateResult;
    }

    return dfs(0);
}
