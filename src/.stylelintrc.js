module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [
    // scss时使用
    'stylelint-scss'
  ],
  rules: {
    // 校验规则略
    // 伪元素必须使用 ::
    'selector-pseudo-element-colon-notation': 'double',
    // 注释前需添加空格
    'comment-whitespace-inside': 'always',
    // 一行可显示属性个数
    'declaration-block-single-line-max-declarations': 1,
    // 16颜色使用长表示法
    'color-hex-length': 'long',
    // 16禁止颜色使用大写
    'color-hex-case': 'lower'
  }
}
