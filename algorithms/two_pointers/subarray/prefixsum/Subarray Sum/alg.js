export function subarraySum(nums, k) {
    const mem = new Map([[0, 0]]);

    let currentSum = 0;

    for(let i = 0; i < nums.length; i++ ) {
        currentSum += nums[i];

        let prevSum = currentSum - k;

        if (mem.has(prevSum)) {
            return [mem.get(prevSum), i + 1];
        }

        mem.set(currentSum, i + 1);
    }

    return [];
}

console.log(subarraySum([1, -20, -3, 30, 5, 4], 7))

// 1 -20 -3 30 5
// target 7

// prefix sum  1 , -19 , -22 , -8 , 3
//map  [1 , 0]
//map  [-19, 1]
//map  [-22, 2]
// return 0 4





