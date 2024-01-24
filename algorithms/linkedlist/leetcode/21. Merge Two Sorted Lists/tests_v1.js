import {convertArrayToLinkedList, convertLinkedListToArray} from "../../utils/Converters.js";
import {mergeTwoLists} from "./alg_v1.js";

//Test 1
let test1Array = [1,2,4];
let test2Array = [1,3,4]
let test1LinkedListHead = convertArrayToLinkedList(test1Array);
let test2LinkedListHead = convertArrayToLinkedList(test2Array);
console.log("Init Array 1: "+ convertLinkedListToArray(test1LinkedListHead));
console.log("Init Array 2: "+ convertLinkedListToArray(test2LinkedListHead));
let test1Result = mergeTwoLists(test1LinkedListHead, test2LinkedListHead);
console.log("Result: " + convertLinkedListToArray(test1Result));
console.log("Valid result : 1,1,2,3,4,4");


