module.exports = {
  printWidth: 80, //设置单行输出（不折行）的（最大）长度

  tabWidth: 2, //缩进长度

  useTabs: false, // 不使用缩进符，而使用空格

  semi: true, //句末使用分号

  singleQuote: true, //使用单引号, true:使用单引号， false: 使用双引号

  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号

  jsxSingleQuote: true, // jsx中使用单引号

  trailingComma: 'all', //多行时尽可能打印尾随逗号
  // none  - 无尾逗号；
  // es5  - 添加es5中被支持的尾逗号；
  // all  - 所有可能的地方都被添加尾逗号；（包括函数参数），这个参数需要安装nodejs8或更高版本

  bracketSpacing: true, //在对象的花括号后（{）和前（}）输出空格: { foo: bar }

  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置

  arrowParens: 'always', //为单行箭头函数的参数添加圆括号
  // " avoid " - 尽可能不添加圆括号，示例：x => x
  // " always " - 总是添加圆括号，示例： (x) => x
};
