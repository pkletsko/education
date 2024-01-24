import {ListNode} from "./ListNode.js";

export function convertArrayToLinkedList(arr) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    for(const num of arr) {
        let nextListItem = new ListNode(num);
        current.next = nextListItem;
        current = nextListItem;
    }

    return dummyHead.next;
}

export function convertLinkedListToArray(head) {
    let resultArray = [];

    let current = head;
    while(current != null) {
        resultArray.push(current.val);
        current = current.next;
    }

    return resultArray;
}

export function introduceCycleToLinkedList(head) {
    let resultHead = head;

    let current = head;
    while(current.next != null) {
        current = current.next;
    }
    current.next = head;

    return resultHead;
}
