export function generateAllCombinationsOrSubSequences_for_loop_from_each_point(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = [];

    function dfs(start, path) {
        // termination condition
        if (start === LEAF_NODE) {
            // we don't need to return any value since we collect result to global array
            // if termination happens immediately we will return default value [] (empty array)
            return;
        }

        // Since we already included first element we are ignoring it by "start + 1" ,
        // and this works as incrementing of state instead of dfs(state + 1)
        for(let index = start + 1; index < nums.length; index++) {
            // add value to recursion state
            path.push(nums[index]);

            // collecting results
            // We don't need to collect each leaf node since each node is a result itself.
            res.push([...path].join("->"));

            // recursion call
            dfs(index, path); //NODE !!! we do not increment index

            // remove value from recursion state
            path.pop();
        }
    }

    // start (init recursion call)
    for (let i = 0; i < nums.length; i++) {
        res.push([nums[i]].join("->"));
        dfs(i, [nums[i]]);
    }

    return res;
}
