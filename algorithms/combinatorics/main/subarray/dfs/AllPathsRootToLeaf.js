export function generateAllPathsRootToLeaf(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = [];

    function dfs(start, path) {
        // termination condition
        if (start === LEAF_NODE) {
            // collecting results
            res.push([...path].join("->"));
        }

        for(let index = start; index < nums.length; index++) {
            // add value to recursion state
            path.push(nums[index]);

            // recursion call
            dfs(index + 1, path);

            // remove value from recursion state
            path.pop();
        }
    }

    // start (init recursion call)
    dfs(0, []);

    return res;
}
