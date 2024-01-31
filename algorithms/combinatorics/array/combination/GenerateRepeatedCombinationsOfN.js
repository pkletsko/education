export function generateRepeatedCombinationsOfN(level, start, nums, path, res, n){
    if (level === n) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        generateRepeatedCombinationsOfN(level + 1, index, nums, path, res, n);
        path.pop();
    }

    return res;
}
