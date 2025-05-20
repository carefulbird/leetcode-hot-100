/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const n = height.length;

    let leftMax = height[0];

    let rightMax = height[n - 1];

    let left = 0;

    let right = n - 1;

    let ans = 0;

    // 双指针移动的时候

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        // 此时 right 指针对应的元素就是目前遍历过最大的元素
        // 那么右边的肯定不用考虑了
        if (height[left] < height[right]) {
            ans = ans + (leftMax - height[left])
            left++;
        } else {
            ans = ans + (rightMax - height[right])
            right--
        }

    }

    return ans

};
// @lc code=end

