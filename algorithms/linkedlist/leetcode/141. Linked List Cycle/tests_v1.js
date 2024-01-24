import {
    convertArrayToLinkedList,
    convertLinkedListToArray,
    introduceCycleToLinkedList
} from "../../utils/Converters.js";
import {hasCycle} from "./alg_v1.js";

//Test 1
let test1Array = [1,2,3,4,5];
let test1LinkedListHead = convertArrayToLinkedList(test1Array);
console.log("Init Array: "+ convertLinkedListToArray(test1LinkedListHead));

let test1Result = hasCycle(test1LinkedListHead);
console.log("Result: " + test1Result);
console.log("Valid result : false");

//Test 1
let test2Array = [1,2,3,4,5];
let test2LinkedListHead = convertArrayToLinkedList(test1Array);
console.log("Init Array: "+ convertLinkedListToArray(test2LinkedListHead));
// create cycle;
let cycledLinkedList = introduceCycleToLinkedList(test2LinkedListHead);

let test2Result = hasCycle(cycledLinkedList);
console.log("Result: " + test2Result);
console.log("Valid result : true");

