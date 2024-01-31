import {change} from "./AllSubSequences.js";

// this result shows that we can use subsequence to compose amount.
// in this case we can compose 5 by subsequence of the last array item 5.
console.log(change(5, [1,2,5]));

// if we want to compose
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// we should allow repetition and reuse items as many times as we want.

