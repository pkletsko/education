export function reorderList(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Merge the two halves
    let first = head;
    let second = prev;

    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

    return head;
}
