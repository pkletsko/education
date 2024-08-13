import {shortestPathBetweenAandB_1} from "./shortestPathBetweenAandB_1.js"
import {shortestPathBetweenAandB_2} from "./shortestPathBetweenAandB_2.js"


let graph = [[1, 2], [0, 2, 3], [0, 1], [1]];
let pointA = 0;
let pointB = 3;
//console.log(shortestPathBetweenAandB_1(graph, pointA, pointB));
console.log(shortestPathBetweenAandB_2(graph, pointA, pointB));
