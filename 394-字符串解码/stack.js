/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let res = ''
    let stack = [];
    let numStack = [];
    const l = '[';
    const r = ']';

    let i = 0;
    let tempString = '';
    let numberString = ''

    while (i <= s.length - 1) {
        // 如果是数字记录数字
        if (!Number.isNaN(Number(s[i]))) {
            numberString = numberString + s[i];
        } else if (s[i] === l) {
            //如果遇到左符号需要将两个都放入栈中
            stack.push(l)
            numStack.push(Number(numberString));
            numberString = '';
        } else if (s[i] === r) {
            // 先得到第一个【】的元素通过累加
            let ele = stack.pop();
            tempString = ''
            while (ele !== l) {
                tempString = ele + tempString;
                ele = stack.pop()
            }

            n = numStack.pop();

            while (n--) {
                stack.push(tempString);
            }

            // 如果栈没有了【】，则需要讲stack的元素全部放入结果中

            if (stack[0] !== l) {
                while (stack.length) {
                    let ele = stack.pop();
                    res = res + ele;
                }

            }


        } else if (stack[0] === l) {
            stack.push(s[i])
        } else {
            res = res + s[i]
        }
        i++
    }

    return res


};
// @lc code=end

