export function mincostTickets(days, costs) {
    let memo = Array.from(Array(days.length), ()=> new Array(days.length * 30).fill(-1));
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    const ticket = [1, 7, 30];

    function dfs(index, coveredUntilDay) {
        if (index >= days.length) {
            return 0;
        }

        if (memo[index][coveredUntilDay] !== -1) {
            return memo[index][coveredUntilDay];
        }

        let min = Infinity;

        if (coveredUntilDay >= days[index]) {
            min = Math.min(min, dfs(index + 1, coveredUntilDay));
        }

        for(let i = 0; i < costs.length; i++) {
            min = Math.min(min, dfs(index + 1, days[index] - 1 + ticket[i]) + costs[i]);
        }

        return memo[index][coveredUntilDay] = min;
    }

    return dfs(0,0);
}
