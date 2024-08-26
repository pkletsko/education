class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    if (head === null || head.next === null) {
        return head; // Base case: empty list or single node
    }

    let newHead = reverseList(head.next); // Recurse on the next node

    head.next.next = head; // Reverse the link
    head.next = null;      // Set the current node's next to null

    return newHead; // Return the new head of the reversed list
}

// Example usage:
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let reversedHead = reverseList(head);

// Printing reversed list
let node = reversedHead;
while (node !== null) {
    console.log(node.val); // Output: 5 4 3 2 1
    node = node.next;
}
