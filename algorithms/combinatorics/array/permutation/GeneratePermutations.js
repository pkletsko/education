export function generatePermutations(ignoreIndexSet, nums, path, res){
    if (ignoreIndexSet.length === nums.length) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        if (ignoreIndexSet.has(index)) {
            continue;
        }
        ignoreIndexSet.add(index);
        path.push(nums[index]);
        res.push([...path].join("->"));
        generatePermutations(ignoreIndexSet, nums, path, res);
        path.pop();
        ignoreIndexSet.delete(index);
    }

    return res;
}
