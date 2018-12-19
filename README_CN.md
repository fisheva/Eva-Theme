<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Things/master/Static/Eva-Theme/Screenshot/Eva-Dark2.png"></p>
<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Things/master/Static/Eva-Theme/Screenshot/Eva-Light2.png"></p>

[![install](http://vsmarketplacebadge.apphb.com/installs/fisheva.eva-theme.svg?style=flat-flat)](https://marketplace.visualstudio.com/items?itemName=fisheva.eva-theme) [![rating](http://vsmarketplacebadge.apphb.com/rating-short/fisheva.eva-theme.svg?style=flat)](https://marketplace.visualstudio.com/items/fisheva.eva-theme)    [![GitHub stars](https://img.shields.io/github/stars/fisheva/eva-theme.svg?style=social&label=Star&maxAge=2592000)](https://github.com/fisheva/eva-theme)

### 介绍

Eva Theme 是一款色彩丰富的语义化着色 VSCode 主题。

内置四套样式: Dark, Dark Bold, Light, Light Bold。Bold样式加粗了许多关键字和函数名。

VSCode版本要求 ≥ 1.12.0。

### 支持

已在下列语言原生环境中(不包含衍生框架)做测试:

- HTML / XML / JSX / WXML
- CSS / LESS / SCSS / WXSS
- JavaScript / TypeScript
- C / C++ / C#
- Java
- PHP
- Pyhton
- Golang
- Ruby
- Dart
- JSON
- Markdown

其它语言也有语法高亮，但暂时不能保证全部语义化。

### 安装

将下列指令复制进VSCode的扩展输入框，并按下回车`Enter`：

```shell
ext install eva-theme
```

### 使用

VSCode → 首选项 → 颜色主题 → 选择Eva Theme

### 字体

上面截图中的字体是 [CamingoCode](https://www.fontsquirrel.com/fonts/camingocode)，如果您喜欢，请下载并安装进系统的字体文件夹，然后 VSCode → 首选项 → 设置：

```json
"editor.fontFamily": "CamingoCode",
```

### 图标

在尝试多款图标主题后, 我觉得[file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons)是和Eva Theme最搭配的。

### 进阶

为了更好的体验, 我向您推荐一款非常优秀的插件 [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)。

下面是我的 Bracket Pair Colorizer 设置:

- 配合 Eva Dark theme

```json
"bracketPairColorizer.showHorizontalScopeLine": false,
"bracketPairColorizer.showVerticalScopeLine": false,
"bracketPairColorizer.consecutivePairColors": [
        "()",
        "[]",
        "{}",
        [
        "#838FA7",
        "#A78CFA",
        "#56B7C3",
        "#FF9070"
        ],
        "#e51400"
    ]
```

- 配合 Eva Light theme

```json
"bracketPairColorizer.showHorizontalScopeLine": false,
"bracketPairColorizer.showVerticalScopeLine": false,
"bracketPairColorizer.consecutivePairColors": [
        "()",
        "[]",
        "{}",
        [
        "#5D5D5FD8",
        "#7C4DFF",
        "#00BEC4",
        "#ff6500"
        ],
        "#e51400"
    ]
```

### 冲突

所有主题插件都是基于字符的Scope值给字符分配颜色。

同时按下"Ctrl+Shift+P"(Windows)或"Command+Shift+P"(Mac), 选择"检查TM作用域", 您可以查看到所有字符的Scope值。

部分插件会改变语法高亮规则, 然后改变部分字符的Scope值, 进而改变其颜色。已知的有Babel, JavaScript Atom Grammar。

### Issue

这款主题目前还不完善, 如果您在任何语言发现前后颜色不一致的的情况, 可以向我提[issue](https://github.com/fisheva/Eva-Theme/issues)(最好附上案例代码, 截图+拷贝), 或者到[插件商店](https://marketplace.visualstudio.com/items/fisheva.eva-theme)给我留言. 感谢您的提交! 我会持续更新的！

### 鼓励

如果您喜欢这款主题, 可以给我一颗[Github Star ☆](https://github.com/fisheva/Eva-Theme)和[好评](https://marketplace.visualstudio.com/items/fisheva.eva-theme)以示鼓励吗? 感谢! O(∩_∩)O~