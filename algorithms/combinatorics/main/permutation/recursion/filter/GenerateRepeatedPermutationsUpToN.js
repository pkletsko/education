export function generateRepeatedPermutationsUpToN(level, nums, path, res, n){
    if (level === n) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        generateRepeatedPermutationsUpToN(level + 1, nums, path, res, n);
        path.pop();
    }

    return res;
}
