module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // http://eslint.cn/docs/rules/
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用2个空格
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: 'error',
    // 使用单引号
    quotes: ['error', 'single'],
    'eol-last': 'error',
    'no-trailing-spaces': 'error', // 禁用行尾空格,
  },
}
