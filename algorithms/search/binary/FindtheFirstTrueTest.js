import {findTheFirstTrue, findTheFirstTrue_v2_broken} from "./FindtheFirstTrue.js";

console.log(findTheFirstTrue([false, false, true, true, true]));

// An example of mistakes we should avoid
console.log(findTheFirstTrue_v2_broken([false, false, true, true, true]));
console.log(findTheFirstTrue_v2_broken([true]));
