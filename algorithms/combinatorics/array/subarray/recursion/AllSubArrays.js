export function generateAllSubArrays(start, nums, res){
    if (start === nums.length) {
        return [];
    }

    let path = [];
    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
    }

    generateAllSubArrays(start + 1, nums, res);

    return res;
}
