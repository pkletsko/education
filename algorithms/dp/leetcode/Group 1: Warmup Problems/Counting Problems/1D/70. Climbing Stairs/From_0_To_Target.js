/**
 You are climbing a staircase. It takes n steps to reach the top.
 Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 Example 1:

 Input: topOfTheStaircase = 2
 Output: 2
 Explanation: There are two ways to climb to the top.
 1. 1 step + 1 step
 2. 2 steps

 Example 2:

 Input: topOfTheStaircase = 3
 Output: 3
 Explanation: There are three ways to climb to the top.
 1. 1 step + 1 step + 1 step
 2. 1 step + 2 steps
 3. 2 steps + 1 step

 Constraints:
 1 <= topOfTheStaircase <= 45

 */

export function climbStairsPlus(topOfTheStaircase) {
    // key/value store (memoization)
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(currentStep) {
        // termination condition
        // We return 1 since we successfully reach the top of the staircase,
        // so we will count these ways to climb to the top.
        if (currentStep === topOfTheStaircase) {
            return 1;
        }

        // termination condition
        // If we overshoot (jumping over the top of the staircase),
        // then we will return 0 since we will not count this move.
        if (currentStep > topOfTheStaircase) {
            return 0;
        }

        // get already calculated value
        if (memo[currentStep]) {
            return memo[currentStep];
        }

        // call recursion for climb 1 or 2 steps
        return memo[currentStep] =
            dfs(currentStep + 1) +
            dfs(currentStep + 2);
    }

    // init recursion from 0 (basically we didn't step yet)
    return dfs(0);
}
