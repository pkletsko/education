export function generateRepeatedPermutationsOfN(level, nums, path, res, n){
    if (level === n) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        path.push(nums[index]);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        generateRepeatedPermutationsOfN(level + 1, nums, path, res, n);
        path.pop();
    }

    return res;
}
