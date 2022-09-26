/**
 * @param {string} s
 * @return {number}
 * 647
 * https://leetcode.cn/problems/palindromic-substrings/?favorite=2cktkvj
 *
 * 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
回文字符串 是正着读和倒过来读一样的字符串。
子字符串 是字符串中的由连续字符组成的一个序列。
具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

示例 1：

输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

 */
/**
 * 第一种暴力求解 ==> 超出时间限制
 * 思路：
 */
var countSubstrings = function (s) {
  let ans = 0
  const arr = s.split('')
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i]
    ans++
    for (let j = i + 1; j < arr.length; j++) {
      temp += arr[j]
      if (temp.split('').reverse().join('') === temp) {
        ans++
      }
    }
  }
  return ans
}

var countSubstrings = function (s) {}
