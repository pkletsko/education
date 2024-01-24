import {convertArrayToLinkedList, convertLinkedListToArray} from "../../utils/Converters.js";
import {middleNode} from "./alg_v1.js";

//Test 1
let test1Array = [1,2,3,4,5];
let test1LinkedListHead = convertArrayToLinkedList(test1Array);
console.log("Init Array: "+ convertLinkedListToArray(test1LinkedListHead));
let test1Result = middleNode(test1LinkedListHead);
console.log("Result: " + convertLinkedListToArray(test1Result));
console.log("Valid result : 3, 4, 5");

//Test 2
let test2Array = [1,2,3,4,5,6];
let test2LinkedListHead = convertArrayToLinkedList(test2Array);
console.log("Init Array: "+ convertLinkedListToArray(test2LinkedListHead));
let test2Result = middleNode(test2LinkedListHead);
console.log("Result: " + convertLinkedListToArray(test2Result));
console.log("Valid result : 4, 5, 6");
