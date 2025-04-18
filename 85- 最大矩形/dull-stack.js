/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const newMar = Array.from(Array(n), () => Array(m));
    let max = 0;
    let stack = [];

    // 先把每一行的矩形高度算出来
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0) {
                newMar[i][j] = matrix[i][j] === '1' ? 1 : 0;
            } else {
                if (matrix[i][j] === '0') {
                    newMar[i][j] = 0;
                } else {
                    newMar[i][j] = newMar[i - 1][j] + 1;
                }
            }

        }

    }

    // 第一个循环计算每一行
    for (let i = 0; i < n; i++) {
        stack = []
        leftMin = Array(m);
        rightMin = Array(m)

        //后续利用单调栈计算每个坐标左右两边第一个小于自己值的坐标
        for (let j = 0; j < m; j++) {
            while (stack.length) {
                if (newMar[i][stack[stack.length - 1]] < newMar[i][j]) {
                    break
                } else {
                    stack.pop()
                }
            }
            stack.push(j);
            leftMin[j] = stack.length < 2 ? -1 : stack[stack.length - 2]
        }
        stack = [];
        for (let j = m - 1; j >= 0; j--) {
            while (stack.length) {
                if (newMar[i][stack[stack.length - 1]] < newMar[i][j]) {
                    break
                } else {
                    stack.pop()
                }
            }
            stack.push(j);
            rightMin[j] = stack.length < 2 ? m : stack[stack.length - 2]

        }

        // 两个相减
        for (let j = 0; j < m; j++) {
            const temp = (rightMin[j] - leftMin[j] - 1) * newMar[i][j]
            max = Math.max(temp, max)
        }

    }

    return max



};
// @lc code=end

