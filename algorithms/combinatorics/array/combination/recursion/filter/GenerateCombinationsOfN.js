export function generateCombinationsOfN(start, nums, path, res, n){
    if (start === nums.length) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        generateCombinationsOfN(index + 1, nums, path, res, n);
        path.pop();
    }

    return res;
}
