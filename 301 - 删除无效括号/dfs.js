/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 * @see https://leetcode.cn/problems/remove-invalid-parentheses/solutions/1068652/gong-shui-san-xie-jiang-gua-hao-de-shi-f-asu8/?envType=problem-list-v2&envId=2cktkvj
 */
var removeInvalidParentheses = function (s) {
    const n = s.length;
    let len = 0; let max = 0;
    const set = new Set()

    let left = 0;
    let right = 0;
    // 首先先把最大括号的一半最大值找出来，一定不会超过这个
    // 遇到（ 分数+1
    // 遇到 ） 分数-1
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            left++
        } else if (s[i] === ')') {
            right++
        }

    }
    max = Math.min(left, right);


    const dfs = (index, cur, score) => {
        if (score < 0 || score > max) {
            return
        }

        // 只有字符串长度大于等于先前判定的n才纳入结果
        if (score === 0 && cur.length >= len) {
            // 如果有最新的长度比之前的大，则删除 set，重新计算结果
            if (cur.length > len) {
                set.clear();
                len = cur.length;
            }
            set.add(cur)
        }

        if (index >= n) {
            return
        }

        if (s[index] === '(') {
            // 可以把当前放进结果
            dfs(index + 1, cur + s[index], score + 1);
            // 也可以不放入
            dfs(index + 1, cur, score)
        } else if (s[index] === ')') {
            dfs(index + 1, cur + s[index], score - 1);
            dfs(index + 1, cur, score)
        } else {
            // 遇到其他字符，因为不能跳过（删除），所以只能放进结果中
            dfs(index + 1, cur + s[index], score)
        }
    }


    dfs(0, '', 0);


    return [...set]

};
// @lc code=end

