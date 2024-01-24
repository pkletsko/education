import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export function mergeTwoLists(list1, list2) {
    let dummyList = new ListNode();
    let current = dummyList;

    // will not touch original lists
    let current1 = list1;
    let current2 = list2;

    while(current1 || current2) {
        // compare values
        if (current1 && current2 && current1.val < current2.val) {
            current.next = current1;
            current = current.next;
            current1 = current1.next;
        } else if(current1 && current2 && current1.val > current2.val) {
            current.next = current2;
            current = current.next;
            current2 = current2.next;
        } else if (current1) { // case 3 : where list2 is empty
            current.next = current1;
            current = current.next;
            current1 = current1.next;
        } else { // case 1 : where list1 is empty
            current.next = current2;
            current = current.next;
            current2 = current2.next;
        }
    }

    return dummyList.next;
}
