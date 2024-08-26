class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    // Base cases: if either list is empty, return the other list
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    // Recursively merge the two lists
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Example usage:
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(l1, l2);

// Printing merged list
let node = mergedList;
while (node !== null) {
    console.log(node.val); // Output: 1 1 2 3 4 4
    node = node.next;
}

