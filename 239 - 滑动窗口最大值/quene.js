/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const n = nums.length;
    let quene = [];
    const res = []

    //先遍历一遍k个元素，按照坐标先后，从大到小排序
    for (let i = 0; i < k; i++) {
        while (nums[quene[quene.length - 1]] <= nums[i]) {
            quene.pop()
        }
        quene.push(i)

    }

    res.push(nums[quene[0]])


    for (let i = k; i < n; i++) {
        // 如果找到了一个更大的元素且是最新的，需要把之前的元素给删除掉
        while (nums[quene[quene.length - 1]] <= nums[i]) {
            quene.pop()
        }
        quene.push(i)

        // 如果队头有滑动窗口外的元素也需要删除
        while (quene[0] <= i - k) {
            quene.shift()
        }

        //保留下来的元素就是最大的
        res.push(nums[quene[0]])
    }

    return res
};
// @lc code=end

