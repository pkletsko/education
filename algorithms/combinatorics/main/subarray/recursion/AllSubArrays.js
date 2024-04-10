export function generateAllSubArrays(start, nums, res){
    // termination condition (LEAF_NODE = nums.length)
    if (start === nums.length) {
        // in compare to dfs implementation where we used global array with default value,
        // here we have to return empty array to cover the case where nums array is empty
        return [];
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
    generateAllSubArrays(start + 1, nums, res);

    return res;
}
