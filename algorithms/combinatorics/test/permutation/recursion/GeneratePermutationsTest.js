import {generatePermutations} from "../../../main/permutation/recursion/GeneratePermutations.js";


//[[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
//    1      2      3     [[1], [2], [3]]
//   2 3    1 3    1 2    [[1,2], [1,3], [2,1], [2,3], [3,1], [3,2]]
//   3 2    3 1    2 1

console.log(generatePermutations(new Set(), [1,2,3], [], []));
