export function generateAllSubArrays(nums){
    const LEAF_NODE = nums.length;
    // global result variable
    let res = [];

    function dfs(start) {
        // termination condition
        if (start === LEAF_NODE) {
            // we don't need to return any value since we collect result to global array
            // if termination happens immediately we will return default value [] (empty array)
            return;
        }

        // aggregate variable
        let path = [];

        for(let index = start; index < nums.length; index++) {
            // building result item
            path.push(nums[index]);

            // collecting results
            res.push([...path].join("->"));
        }

        // recursion call
        dfs(start + 1);
    }

    // start (init recursion call)
    dfs(0);

    return res;
}
