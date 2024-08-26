
/**
 * @param {ListNode} person
 * @return {number}
 */
function getMyPositionInLine(person) {
    if(!person.next) {
        return 1;
    }

    return getMyPositionInLine(person.next) + 1;
}
