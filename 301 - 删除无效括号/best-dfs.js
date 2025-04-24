/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const n = s.length;
    let len = 0; let max = 0;
    const set = new Set()

    // left 表示还需要删除的（
    let left = 0;
    // right 表示还需要删除的）
    let right = 0;

    let c1 = 0;
    let c2 = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            left++
        } else if (s[i] === ')') {
            if (left > 0) {
                left--
            } else {
                // 这个时候就是纯多余
                right++
            }

        }

    }

    // len 表示最后的结果
    len = n - (left + right);

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            c1++
        } else if (s[i] === ')') {
            c2++
        }

    }
    // 同样计算最大的阔幅
    max = Math.min(c1, c2);


    const dfs = (index, cur, left, right, score) => {
        if (score < 0 || score > max || left < 0 || right < 0) {
            return
        }


        if (cur.length === len && score === 0) {
            set.add(cur);
            return
        }

        if (index >= n) {
            return
        }


        if (s[index] === '(') {
            dfs(index + 1, cur + s[index], left, right, score + 1);
            // 删除了左边的符号需要-1
            dfs(index + 1, cur, left - 1, right, score)
        } else if (s[index] === ')') {
            dfs(index + 1, cur + s[index], left, right, score - 1);
            // 删除了右ß边的符号需要-1
            dfs(index + 1, cur, left, right - 1, score)
        } else {
            dfs(index + 1, cur + s[index], left, right, score)
        }
    }


    dfs(0, '', left, right, 0);


    return [...set]

};
// @lc code=end

