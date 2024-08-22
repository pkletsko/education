export function generateAllCombinationsOrSubSequences_not_include(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = [];

    function dfs(start, path) {
        // termination condition
        if (start === LEAF_NODE) {
            // collecting results
            // each LEAF represent final result
            res.push([...path].join("->"));
            return;
        }

        // add value to recursion state
        path.push(nums[start]);
        // recursion call INCLUDE
        dfs(start + 1, path)
        // remove value from recursion state
        path.pop();
        // recursion call NOT INCLUDE
        dfs(start + 1, path)
        //Recursive Calls: The recursive call that doesn't include the current element (i.e., the "NOT INCLUDE" part)
        // should increment the start index as well.
        // If we don't increment start, the function will enter an infinite loop.
    }

    // start (init recursion call)
    dfs(0, []);

    return res;
}
