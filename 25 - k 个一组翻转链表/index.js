/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

    let n = 0;
    let temp = head;
    while (temp) {
        n++
        temp = temp.next
    }

    const reverse = (last, head, k, length) => {
        if (length + k > n) {
            return
        }
        let tou = head;
        let next = null;
        let pre = null;

        while (k--) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }

        if (head) {
            tou.next = head;
        }

        if (last) {
            last.next = pre
        }

        return pre
    }

    let curLen = 0;
    let res = head;
    let ans = null;
    let pre = null;

    while (head) {
        ans = reverse(pre, head, k, curLen);
        if (curLen === 0) {
            res = ans
        }
        curLen = curLen + k;
        pre = head;
        head = head.next;
    }
    return res

};
// @lc code=end

