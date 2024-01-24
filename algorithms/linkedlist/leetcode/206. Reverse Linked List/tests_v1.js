import {convertArrayToLinkedList, convertLinkedListToArray} from "../../utils/Converters.js";
import {reverseList} from "./alg_v1.js";

//Test 1
let test1Array = [1,2,3,4,5];
let test1LinkedListHead = convertArrayToLinkedList(test1Array);
console.log("Init Array: "+ convertLinkedListToArray(test1LinkedListHead));
let test1Result = reverseList(test1LinkedListHead);
console.log("Result: " + convertLinkedListToArray(test1Result));
console.log("Valid result : 5, 4, 3, 2, 1");

