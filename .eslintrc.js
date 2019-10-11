// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 语句强制分号结尾
    'semi': [0],
    // 禁止混用tab和空格
    'eol-last':[0],
    // 函数定义时括号前要不要有空格
    'space-before-function-paren': [0],
    // 空行最多不能超过5行
    'no-multiple-empty-lines': [1, {"max": 5}],
    // 允许下划线式的命名方式
    'camelcase': [0, {"properties": "never"}],
    // 转义字符串，模板文字和正则表达式中的非特殊字符不会产生任何影响
    'no-useless-escape': 0
  }
}
