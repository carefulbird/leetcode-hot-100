/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // (1#(x)#(1))
    // 括号表示整个
    // # 分割左右节点元素
    const dfs = (root) => {
        if (!root) {
            return '(x)'
        }

        const left = dfs(root.left);
        const right = dfs(root.right);

        return `(${root.val}#${left}#${right})`

    }

    return dfs(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const dfs = (string) => {
        if (string === '(x)') {
            return null
        }

        const n = string.length;

        let val = '';
        let left = '';
        let right = '';

        let jingIndex = 0;
        let score = 0;


        // 找到 val
        for (let i = 0; i < n; i++) {
            if (string[i] === '#' && !jingIndex) {
                val = Number(string.slice(1, i));
                jingIndex = i;
                break
            }
        }

        // 找到左边的
        for (let i = jingIndex + 1; i < n; i++) {
            if (string[i] === '(') {
                score++
            } else if (string[i] === ')') {
                score--
            }

            if (score === 0) {
                left = string.slice(jingIndex + 1, i + 1)
                break
            }

        }


        // 找到右边的
        for (let i = n - 2; i >= 0; i--) {
            if (string[i] === ')') {
                score++
            } else if (string[i] === '(') {
                score--
            }

            if (score === 0) {
                right = string.slice(i, n - 1)
                break
            }
        }


        const root = { val, left: null, right: null };
        root.left = dfs(left);
        root.right = dfs(right)
        return root
    }


    return dfs(data)


};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

