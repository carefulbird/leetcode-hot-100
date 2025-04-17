/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    if (t.length === 1 && s.length === 1) {
        return s === t ? s : ''
    }

    const oldMap = new Map();
    const newMap = new Map();
    let min = Number.POSITIVE_INFINITY;
    let res = ''

    for (let i = 0; i < t.length; i++) {
        const e = t[i];
        if (oldMap.has(e)) {
            oldMap.set(e, oldMap.get(e) + 1)
        } else {
            oldMap.set(e, 1)
        }
    }

    let l = 0;
    let r = 0;
    newMap.set(s[0], 1)
    const n = s.length;
    const check = (l, r) => {
        if (r - l < t.length - 1) {
            return false
        }

        return oldMap.keys().every((key) => {
            if (!newMap.get(key)) {
                return false
            }
            return newMap.get(key) >= oldMap.get(key)
        })
    }




    while (l < n && r < n) {
        const isSuccess = check(l, r);

        // 存在则移动左指针
        if (isSuccess) {
            const temp = s.slice(l, r + 1);

            if (temp.length < min) {
                min = temp.length;
                res = temp
            }
            const count = newMap.get(s[l])
            newMap.set(s[l], count - 1)
            l++;

            // 不存在则移动右指针
        } else {
            // 如果移不动了就返回
            if (r >= n - 1) {
                return res
            } else {
                r++
                const count = newMap.get(s[r]);
                if (!count) {
                    newMap.set(s[r], 1)
                } else {
                    newMap.set(s[r], count + 1)
                }
            }
        }

    }

    return res

};
// @lc code=end

