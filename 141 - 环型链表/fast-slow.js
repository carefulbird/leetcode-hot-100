/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * @see https://leetcode.cn/problems/linked-list-cycle/solutions/175734/yi-wen-gao-ding-chang-jian-de-lian-biao-wen-ti-h-2/
 */
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    let init = false;

    while (fast && slow) {
        if (fast === slow && init) {
            return true;
        }

        init = true;

        slow = slow.next;
        let temp = fast.next;

        if (!temp) {
            return false
        }

        fast = temp.next;
    }


    return false
};
// @lc code=end

