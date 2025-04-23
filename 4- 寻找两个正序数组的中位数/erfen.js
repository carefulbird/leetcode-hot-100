/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const findK = (l1, r1, nums1, l2, r2, nums2, k) => {
        console.log(l1, r1, l2, r2, k)

        const len1 = r1 - l1 + 1;
        const len2 = r2 - l2 + 1;

        // 调换位置，只为len1 最小
        if (len2 < len1) {
            return findK(l2, r2, nums2, l1, r1, nums1, k)
        }

        // 这样容易排查当某一个数组长度为0的情况
        if (len1 === 0) {
            return nums2[l2 + k - 1]
        }

        if (k === 1) {
            return Math.min(nums1[l1], nums2[l2])
        }


        // 每次找 k>>1 个 排除

        const i = l1 + Math.min(k >> 1, len1) - 1;
        const j = l2 + Math.min(k >> 1, len2) - 1;


        if (nums1[i] < nums2[j]) {
            return findK(i + 1, r1, nums1, l2, r2, nums2, k - (i - l1 + 1))
        } else {
            return findK(l1, r1, nums1, j + 1, r2, nums2, k - (j - l2 + 1))
        }
    }

    const n = nums1.length;
    const m = nums2.length;
    const left = (n + m + 1) >> 1;
    const right = (n + m + 2) >> 1;
    // 奇数 left 和 right 是一个
    // 偶数 left 和 right 不是一个

    return (findK(0, n - 1, nums1, 0, m - 1, nums2, left) + findK(0, n - 1, nums1, 0, m - 1, nums2, right)) * 0.5





};
// @lc code=end

