export function climbStairsMinus(topOfTheStaircase) {
    // key/value store (memoization)
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(currentStep) {
        // termination condition
        // We return 1 since we successfully reach the bottom of the staircase,
        // so we will count these ways to climb to the top.
        if (currentStep === 0) {
            return 1;
        }

        // termination condition
        // If we overshoot (jumping over the bottom of the staircase),
        // then we will return 0 since we will not count this move.
        if (currentStep < 0) {
            return 0;
        }

        // get already calculated value
        if (memo[currentStep]) {
            return memo[currentStep];
        }

        // call recursion for climb down 1 or 2 steps
        return memo[currentStep] =
            dfs(currentStep - 1) +
            dfs(currentStep - 2);
    }

    // init recursion from topOfTheStaircase (we start from the top step and going down)
    return dfs(topOfTheStaircase);
}
