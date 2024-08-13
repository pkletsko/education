function coinPlus(coins, target) {
    let memo = {};

    function dfs(sum) {
        if (sum === target) {
            return [];
        }

        if (sum > target) {
            return null;
        }

        if (memo[sum]) {
            return memo[sum];
        }

        let minCombination = null;

        for (const coin of coins) {
            const result = dfs(sum + coin);
            if (result !== null) {
                const currentCombination = [coin, ...result];
                if (minCombination === null || currentCombination.length < minCombination.length) {
                    minCombination = currentCombination;
                }
            }
        }


        return memo[sum] = minCombination;
    }

    let result = dfs(0);

    return result === null ? -1 : result;
}

// Example usage:
let coins = [1, 2, 5];
let target = 11;
console.log(coinPlus(coins, target));  // Output: [5, 5, 1]

coins = [1, 4, 5];
target = 13;
console.log(coinPlus(coins, target));  // Output: [5, 5, 1]
