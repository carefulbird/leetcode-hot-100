/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  let isFind = false;

  const dfs = (i, j, map, count) => {
    if (i >= m || i < 0 || j >= n || j < 0 || map.get(`${i}+${j}`)) {
      return;
    }

    if (board[i][j] === word[count]) {
      count++;
      map.set(`${i}+${j}`, true);

      if (count === word.length) {
        isFind = true;
      } else {
        dfs(i + 1, j, map, count);
        dfs(i - 1, j, map, count);
        dfs(i, j + 1, map, count);
        dfs(i, j - 1, map, count);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[0] === board[i][j]) {
        dfs(i, j, new Map(), 0);
        if (isFind) {
          return true;
        }
      }
    }
  }

  return false;
};

exist;
// @lc code=end
//[["A","B","C","E"],
// ["S","F","E","S"],
// ["A","D","E","E"]]
