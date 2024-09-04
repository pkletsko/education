import {reorderList} from "./reorderList.js";
import {convertArrayToLinkedList, convertLinkedListToArray} from "../../../utils/Converters.js";

let test1Array = [1,2,3,4,5];
let test1LinkedListHead = convertArrayToLinkedList(test1Array);
console.log("Init Array: "+ convertLinkedListToArray(test1LinkedListHead));

let res = reorderList(test1LinkedListHead);

console.log(convertLinkedListToArray(res));
