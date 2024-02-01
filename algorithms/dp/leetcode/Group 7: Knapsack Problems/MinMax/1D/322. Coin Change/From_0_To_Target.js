export function coinPlus(coins, target) {
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

        for(const coin of coins) {
            let result = dfs(sum + coin);
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        return memo[sum] = aggregateResult;
    }

    let result  = dfs(0);

    return result === Infinity ? -1 : result;
}
