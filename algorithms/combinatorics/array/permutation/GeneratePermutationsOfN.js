export function generatePermutationsOfN(ignoreIndexSet, nums, path, res, n){
    if (ignoreIndexSet.length === nums.length) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        if (ignoreIndexSet.has(index)) {
            continue;
        }
        path.push(nums[index]);
        ignoreIndexSet.add(index);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        generatePermutationsOfN(ignoreIndexSet, nums, path, res, n);
        path.pop();
        ignoreIndexSet.delete(index);
    }

    return res;
}
