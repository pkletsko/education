export function numTeamsPlus(nums) {
    let memo = Array.from(Array(nums.length + 1), ()=> Array(4));
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [Random order] End

    function dfs(start, team) {
        // console.log("start = " + start);
        // console.log(team);
        if (start > nums.length - 1) {
            return 0;
        }

        // if (memo[start][team.length]) {
        //     console.log("dd");
        //     return memo[start][team.length];
        // }

        let aggregateResult = 0;

        for(let index = start; index < nums.length; index++) {
            team.push(nums[index]);

            if (team.length === 3 &&
                (team[0] < team[1] && team[1] < team[2]) ||
                (team[0] > team[1] && team[1] > team[2])
            ) {
                aggregateResult++;
            } else if (team.length < 3) {

                aggregateResult += dfs(index + 1, team)
            }


            team.pop();
        }

        return  aggregateResult;
    }

    // start

    return dfs(0, []);
}
