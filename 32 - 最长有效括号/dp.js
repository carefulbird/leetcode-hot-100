/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let max = 0;

    const dp = Array(s.length + 1).fill(0);
    dp[-1] = 0


    // 三种情况
    // 当前元素是 （ 就不可能构成有效括号
    // 前一个元素是 （ 则 是 dp[i-2] + 2
    // 如果是重叠括号，则要看 （）（（）） 最左边的是否是 （

    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            continue
        }

        if (s[i - 1] === '(') {
            dp[i] = dp[i - 2] + 2
        } else if (s[i - dp[i - 1] - 1] === '(') {
            dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
        }
        max = Math.max(dp[i], max)
    }


    return max
};
// @lc code=end

