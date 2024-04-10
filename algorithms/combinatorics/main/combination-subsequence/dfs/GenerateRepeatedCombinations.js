export function generateRepeatedCombinations(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = []

    function dfs(level, start, path) {
        // termination condition
        if (level === LEAF_NODE) {
            // we don't need to return any value since we collect result to global array
            // if termination happens immediately we will return default value [] (empty array)
            return;
        }

        for(let index = start; index < nums.length; index++) {
            // add value to recursion state
            path.push(nums[index]);

            // collecting results
            res.push([...path].join("->"));

            // recursion call
            dfs(level + 1, index, path);

            // remove value from recursion state
            path.pop();
        }
    }

    // start (init recursion call)
    dfs(0,0, []);

    return res;
}
