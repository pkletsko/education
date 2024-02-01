export function coinMinus(coins, target) {
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

        for(const coin of coins) {
            let result = dfs(sum - coin);
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        return memo[sum] = aggregateResult;
    }

    let result  = dfs(target);

    return result === Infinity ? -1 : result;
}
