/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const combind = (left, right) => {
        if (!left || (left && right && left.val > right.val)) {
            const temp = left;
            left = right;
            right = temp
        }

        let head1 = left;
        let head2 = right;
        let next1 = null;
        let next2 = null;
        let pre = null;

        while (head1 && head2) {
            const val1 = head1.val;
            const val2 = head2.val;
            next1 = head1.next;
            next2 = head2.next;
            if (val1 <= val2 && next1 && val2 <= next1.val) {
                head1.next = head2;
                head2.next = next1;
                pre = head1;
                head1 = head1.next;
                head2 = next2;

            } else {
                pre = head1;
                head1 = head1.next;
            }
        }
        if (head2) {
            pre.next = head2
        }
        return left
    }


    if (!lists.length) {
        return null
    }

    const merge = (lists) => {
        const n = lists.length;
        if (n === 0) {
            return null
        }

        if (n === 1) {
            return lists[0]
        }

        const middle = n >> 1;
        const left = lists.slice(0, middle);
        const right = lists.slice(middle);


        return combind(merge(left), merge(right))
    }



    return merge(lists)
};
// @lc code=end

