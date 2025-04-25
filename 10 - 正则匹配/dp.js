/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @see https://leetcode.cn/problems/regular-expression-matching/solutions/296114/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/?envType=problem-list-v2&envId=2cktkvj
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const n = s.length;
    const m = p.length;


    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(false));


    dp[0][0] = true;
    dp[1][1] = s[0] === p[0] || p[0] === '.'
    dp[0][1] = p[0] === '*'

    for (let i = 2; i <= m; i++) {
        dp[0][i] = p[i - 1] === '*' && dp[0][i - 2]
    }

    for (let i = 1; i <= n; i++) {
        dp[i][0] = false
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const left = s[i];
            const right = p[j];

            // 如果末端都一样，则向前匹配
            if (left === right || right === '.') {
                dp[i + 1][j + 1] = dp[i][j]
            } else if (right === '*') {

                // 如果* 前一个字符和 s末端一致有三种情况
                if (p[j - 1] === '.' || p[j - 1] === s[i]) {

                    // 分别表示0、1、2 个字母情况
                    dp[i + 1][j + 1] = dp[i + 1][j - 1] || dp[i][j - 1] || dp[i][j + 1]
                } else {
                    // 不一致只能消除字母
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                }
            }

        }

    }

    return dp[n][m]

};
// @lc code=end

