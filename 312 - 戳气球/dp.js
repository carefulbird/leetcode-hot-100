/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @see https://leetcode.cn/problems/burst-balloons/solutions/337630/zhe-ge-cai-pu-zi-ji-zai-jia-ye-neng-zuo-guan-jian-/?envType=problem-list-v2&envId=2cktkvj
 */
var maxCoins = function (nums) {

    const n = nums.length;
    const dp = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
    nums[-1] = 1;
    nums[n] = 1;

    //  dp 开区间
    // 计算 第k 个气球是最后爆炸的
    // dp[i][j] = max<k=j+1,i>(dp[j][k]+dp[k][i] + nums[k-1] * numns[i-1] * nums[j-1])


    let max = 0;
    let total = 0;

    for (let i = 0; i <= n + 1; i++) {
        for (let j = i; j >= 0; j--) {
            if (i <= j + 1) {
                continue
            }


            max = 0;
            for (let k = j + 1; k < i; k++) {
                total = dp[j][k] + dp[k][i] + nums[k - 1] * nums[i - 1] * nums[j - 1];
                max = Math.max(max, total)
            }
            dp[j][i] = max

        }



    }

    console.log(dp, 'xxx')


    return dp[0][n + 1]

};
// @lc code=end

