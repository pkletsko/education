export function generatePermutations(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = [];

    function dfs(ignoreIndexSet, path) {
        // termination condition
        if (ignoreIndexSet.length === LEAF_NODE) {
            // we don't need to return any value since we collect result to global array
            // if termination happens immediately we will return default value [] (empty array)
            return;
        }

        for(let index = 0; index < nums.length; index++) {
            // pruning
            if (ignoreIndexSet.has(index)) {
                continue;
            }

            // add value to recursion state
            ignoreIndexSet.add(index);
            path.push(nums[index]);

            // collecting results
            res.push([...path].join("->"));

            // recursion call
            dfs(ignoreIndexSet, path);

            // remove value from recursion state
            path.pop();
            ignoreIndexSet.delete(index);
        }
    }

    // start (init recursion call)
    dfs(new Set(), []);

    return res;
}
