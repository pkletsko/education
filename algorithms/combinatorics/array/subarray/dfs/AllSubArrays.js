export function generateAllSubArrays(nums){
    let res = [];

    function dfs(start) {
        if (start === nums.length) {
            return;
        }

        let path = [];
        for(let index = start; index < nums.length; index++) {
            path.push(nums[index]);
            res.push([...path].join("->"));
        }

        dfs(start + 1);
    }

    // start
    dfs(0);

    return res;
}
