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
    const leftMax = Array(n);
    const rightMax = Array(n);



    leftMax[0] = height[0];

    rightMax[n - 1] = height[n - 1];


    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }


    let ans = 0;


    for (let i = 0; i < n; i++) {
        ans = ans + (Math.min(leftMax[i], rightMax[i]) - height[i])

    }

    return ans
};
// @lc code=end

