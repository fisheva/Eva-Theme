Eva Theme的特殊字体样式有 bold、italic、underline。

### Bold
bold样式用于增加关键字的醒目程度。

在 Bold 和 Italic Bold 版本中，字体样式要设为 bold 的关键字或符号有
1. 有创建、定义、声明含义，如 `let` `const` `var`；或形式类似的，如 `import`.
2. 布尔值 `false` `true`; 比较符号 如 `==` `===` `>` `<`; 条件语句 `if` `esle if` `else`.
3. 流程控制 如 `for` `return` `export default`.
4. 函数名, 箭头函数符号 `=>`.
5. 其它重要关键字，如 `this` `debugger` `delete` (js), `!important` (css), `self` (Python).
6. 特例，在normal版本下也保持bold样式的：1) markdown里的加粗文字; 2) 属性读取符号点`.`

### Italic
italic样式为偏爱斜体字的用户准备，原则是在不影响阅读代码观感的前提下，文字能斜尽斜。

在 Italic 和 Italic Bold 版本中，**不斜体**的字符有
1. 所有标点符号。
2. HTML标签。
3. 正则表达式内所有字符。
4. 转义字符, 如 `&nbsp;`

在 normal 和 Bold 版本中，依然**斜体**的字符有：markdown里的斜体文字。

### Underline
underline样式只用于标记未被调用的变量。

EN: [font-style-rules.md]()