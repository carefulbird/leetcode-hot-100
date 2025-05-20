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
    const stack = [];

    let ans = 0;


    for (let i = 0; i < height.length; i++) {
        const current = height[i];

        while (stack.length && current > height[stack[stack.length - 1]]) {
            const top = stack[stack.length - 1];
            stack.pop();

            if (!stack.length) {
                break
            }
            // 找到栈顶的左边元素
            left = stack[stack.length - 1];

            // 左边和右边元素作一个比较，小的为准
            const h = Math.min(height[left], current) - height[top];
            const w = (i - left - 1);
            ans = ans + w * h

        }


        stack.push(i)

    }

    return ans

};
// @lc code=end

