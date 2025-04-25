/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @see https://leetcode.cn/problems/binary-tree-maximum-path-sum/solutions/297005/er-cha-shu-zhong-de-zui-da-lu-jing-he-by-leetcode-/?envType=problem-list-v2&envId=2cktkvj
 */
var maxPathSum = function (root) {

    let max = Number.NEGATIVE_INFINITY;

    // 后续遍历
    // 得到当前节点的 效力值，选择当前节点跟谁走 =》
    // 可以跟左、跟右、或者两个都不跟
    const dfs = (root) => {

        if (!root) {
            return 0
        }

        const left = dfs(root.left);
        const right = dfs(root.right);


        max = Math.max(max, root.val + Math.max(left, 0) + Math.max(0, right))

        return root.val + Math.max(left, right, 0)
    }


    dfs(root);


    return max

};
// @lc code=end

