/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  // fast 速度是慢指针的两倍
  // 假设 head 到环起点路径为 a，slow 后面在环又走了 b，环剩余为 c，n 为 fast 走的圈数
  // fast = a + n(b+c) + b
  // slow = a + b
  // fast = 2 * slow
  // a+ nb + nc + b = 2a + 2b
  //  (n-1)*b + (n-1)*c + c = a
  // (n-1)*(b+c) + c = a
  // slow 再走 n-1 圈 再走 c  = a

  if (!fast) {
    return null;
  }

  let isInit = false;

  while (fast && slow && (fast !== slow || !isInit)) {
    isInit = true;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
    slow = slow.next;
  }
  // 第一次相遇的时候

  fast = head;

  // 让 fast 回到 head 速度变为1 ，slow 一直为 1，相遇时就是环的起点
  while (fast !== slow && slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

detectCycle;
// @lc code=end
