/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        if(head == null)
        return; 

        let slow = head, fast = head;
        while(fast!= null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null, curr = slow;
        while(curr != null){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let first = head, second = prev;
        while(second.next != null){
            let temp1 = first.next;
            let temp2 = second.next; 
            first.next = second;
            first = temp1;
            second.next = temp1;
            second = temp2;
        }
        return head;
    }
}
