import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export function mergeTwoLists(list1, list2) {
    let dummyList = new ListNode();
    let current = dummyList;

    while(list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        } else {
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }
    }
    if (!list1) {
        current.next = list2;
    }
    if (!list2) {
        current.next = list1;
    }
    return dummyList.next;
}
