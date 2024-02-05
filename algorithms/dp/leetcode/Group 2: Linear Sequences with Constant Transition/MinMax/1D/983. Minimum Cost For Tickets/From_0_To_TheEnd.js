export function mostPoints(questions) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(index) {
        if (index >= questions.length) {
            return 0;
        }

        if (memo[index]) {
            return memo[index];
        }

        let aggregateResult = Math.max(
            dfs(index + 1),
            dfs(index + 1 + questions[index][1]) + questions[index][0]
        );

        return memo[index] = aggregateResult;
    }

    let max = 0;

    for(let i = 0; i < questions.length; i++ ) {
        max = Math.max(max, dfs(i));
    }

    return max;
}
