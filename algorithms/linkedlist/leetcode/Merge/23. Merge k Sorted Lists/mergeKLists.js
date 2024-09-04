/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 *
 *
 * Example 1:
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 * Example 2:
 *
 * Input: lists = []
 * Output: []
 * Example 3:
 *
 * Input: lists = [[]]
 * Output: []
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    let minQueue = new MinPriorityQueue();

    for(head of lists) {
        //console.log(head);
        if (head) {
            minQueue.enqueue(head, head.val);
        }
    }

    let result = new ListNode(null);
    let tempHead = result;

    while(!minQueue.isEmpty()) {
        let node = minQueue.dequeue().element;
        tempHead.next = new ListNode(node.val);
        tempHead = tempHead.next;

        //console.log(node);
        if (node.next) {
            //console.log(node.next);
            minQueue.enqueue(node.next, node.next.val);
        }
    }

    return result.next;
};
