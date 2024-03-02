export function numTeamsPlus(nums) {
    let memo = Array.from(Array(nums.length), ()=> Array(3));
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [Random order] End

    function dfs( start, direction) {
        console.log(start + " direction = " + direction);
        if (start >= nums.length) {
            return 0;
        }
        // console.log("start = " + start);
        // console.log(team);
        // if (start > nums.length - 1) {
        //     return 0;
        // }

        if (memo[start][direction]) {
            console.log("direction = " + direction);
            return memo[start][direction];
        }

        let aggregateResult = 0;


        for(let index = start; index < nums.length; index++) {
            //team.push(nums[index]);

            if (direction === -1) {
                if (index + 1 < nums.length && nums[index] < nums[index + 1]) {
                    aggregateResult += dfs( index + 1, 0); // down
                } else {
                    aggregateResult += dfs(index + 1, 1); // up
                }
            } else if (direction === 0 && nums[index] < nums[index + 1]) {
                aggregateResult += dfs( index + 1, 0); // down
            } else if (direction === 1 && nums[index] > nums[index + 1]) {
                aggregateResult += dfs(index + 1, 1); // up
            }


           // team.pop();
        }

        return  memo[start][direction] = aggregateResult;
    }

    // start

    return dfs(0, -1);
}
