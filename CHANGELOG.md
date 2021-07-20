1.6.1(2021-07-20)


* Add All UI

```UI
menu.border: #21252b/#E1E4EB
```

* Delete All UI

```UI
editorOverviewRuler.commonContentForeground: #2D3039/#E5E8EF
merge.commonContentBackground: #2D3039/#E5E8EF
merge.commonHeaderBackground: #2D3039/#E5E8EF
```

1.6.0 (2021-07-10)

* Add All Syntax

```Syntax
meta.selector invalid.deprecated.combinator: #56B7C3/#00BEC4
```

1.5.9 (2021-07-10)

* Delete All UI

```UI
//API被换成下面2个
notebook.focusedRowBorder: #598DEF00/#0065FF00
notebook.rowHoverBackground: #598DEF3F/#0065FF19
```

* Add All UI

```UI
settings.focusedRowBorder: #598DEF00/#0065FF00
settings.rowHoverBackground: #598DEF3F/#0065FF19
```

* Changed Light UI

```UI
editorGutter.foldingControlForeground: #444 → #000
```

1.5.7~1.5.8 (2021-07-08)

* Add All UI

```UI
notebook.focusedRowBorder: #598DEF00/#0065FF00
```

1.5.6 (2021-07-06)

* Add All UI

```UI
dropdown.listBackground: #23272F/#F1F4FB
editorHoverWidget.statusBarBackground:#23272F/#F1F4FB
notebook.rowHoverBackground: #598DEF3F/#0065FF19
settings.focusedRowBackground: #598DEF66/#0065FF33
```

* Changed Italic Syntax

```Syntax
class: "italic" → ""

meta.function-call support.class.builtin, meta.function-call support.class → new.expr meta.function-call support.class.builtin, new.expr meta.function-call support.class
```

1.5.5 (2021-07-04)

* Add All UI

```UI
activityBar.activeFocusBorder: #4480F4/#4480F4
activityBar.dropBorder: #4480F4/#4480F4
editor.foldBackground: #32446469/#598DEF21
editorOverviewRuler.background: #282c34/#EBEEF5
editorGutter.foldingControlForeground: #FFF/#444
extensionIcon.starForeground: #FF8A4C/#FF6D12
problemsErrorIcon.foreground: #E51400/#EC0000
problemsInfoIcon.foreground: #4480F4/#4480F4
problemsWarningIcon.foreground: #FF8A4C/#FF6D12
```

* Changed Dark UI

```UI
statusBarItem.hoverBackground: #598DEF59 → #598DEF66
statusBarItem.prominentHoverBackground: #598DEF59 → #598DEF66
```

* Changed Light UI

```UI
//加深颜色10°
minimap.findMatchHighlight: #878A917F → #7D80877F
```

1.5.4 (2021-07-03)

* Changed All UI

```UI
minimap.findMatchHighlight: #6A707DE5/#BBBEC5 → #D0D5E17F/#878A917F
```

* Changed Dark UI

```UI
terminal.ansiBrightGreen: #3FB93F → #3EC33E
```

* Add All Syntax

```Syntax
//加这条是因为 new 普通class 时，显示的是蓝色，而 new Number()这类语言内置class时，显示的是水蓝色，为了颜色统一加的这条, 而且刚好有种调用了构造函数的感觉。
meta.function-call support.class.builtin, meta.function-call support.class: #56B7C3/#00BEC4 → #6495EE/#437AED
```

1.5.3 (2021-07-03)

* Changed Bold Syntax

```Syntax
Class, Interface, Struct: "Bold" → ""
```

* Changed All Syntax

```Syntax
Fixed many Syntax.
```

1.5.0 ~ 1.5.2 (2021-07-03)

* Add All Syntax

```Syntax
entity.name.type: #56B7C3/#00BEC4
```

* Changed All Syntax

```Syntax
constant.character.escape, constant.character.entity: #FF9070/#FF6D12 → #8A97C3/#888
keyword.operator.cast: #56B7C3/#00BEC4 → #6495EE/#437AED

class, interface, struct: #FF6AB3/#EF8ED8  → #56B7C3/#00BEC4
```

1.4.9 (2021-06-30)

* Changed Dark UI

```UI
textLink.foreground: #4088F7 → #4283F5
```

* Changed All UI

```UI
diffEditor.removedTextBackground: #f14c4c4C/#4088F7 → #f14c4c3F/#4d91f8
```

* Changed Light UI

```UI
diffEditor.diagonalFill: #C9CCD2 → #C4C7CD
```

1.4.8 (2021-06-29)

* Changed All Syntax

```Syntax
fixed some Cpp syntax.
```

1.4.7 (2021-06-28)

* Changed Dark UI

```UI
toolbar.hoverBackground:#4283F58C → #4283F58F
toolbar.activeBackground: #4283F58C → #4283F58F
```

1.4.6 (2021-06-28)

* Add All UI

```UI
toolbar.hoverBackground:#4283F58C/#0065FF3F
toolbar.hoverOutline:#4283F500/#0065FF00
toolbar.activeBackground: #4283F58C/#0065FF3F

welcomePage.background: #282c34/#EBEEF5
welcomePage.progress.background: #2B2E36/#ebeef5
welcomePage.progress.foreground: #4283F5/#4d91f8
welcomePage.tileBackground: #21252B/#E1E4EB
welcomePage.tileHoverBackground: #598DEF64/#0065FF33
```

* Changed All UI

```UI
textLink.foreground: #598DEF/#5B87EB → #4088F7/#4088F7
```

1.4.5 (2021-06-27)

* Changed All UI

```UI
editor.snippetFinalTabstopHighlightBackground: #324464 → #32446499/#CFD2D98C
editor.snippetTabstopHighlightBackground: #324464/#CFD2D9 → #32446499/#CFD2D98C
```

* Changed All Syntax

```Syntax
from: #CF68E1/#C838C6 → #A78CFA/#7C4DFF
export: #A78CFA/#7C4DFF → #CF68E1/#C838C6
{{}}: #838FA7/#5D5D5FD8 → #6495EE/#437AED
=>: #CF68E1/#C838C6 → #6495EE/#437AED
typeof: #6495EE/#437AED → #FF6AB3/#EF8ED8
and many many others...
```

1.4.4 (2021-06-26)

* Changed All Syntax

```Syntax
trycatch: #CF68E1/#C838C6 → #6495EE/#437AED
export , import : #CF68E1/#C838C6 → #A78CFA/#7C4DFF
```

1.4.3 (2021-06-25)

* Changed All UI

```UI
editor.snippetFinalTabstopHighlightBackground: #45B7463F/#45B7464C → #324464/#CFD2D9
editor.snippetFinalTabstopHighlightBorder: #535773/#BDBDBED8 → #5F668B/#CFD2D9/#BDBDBE
editor.snippetTabstopHighlightBackground: #45B7463F/#45B7464C → #324464/#CFD2D9
editor.snippetTabstopHighlightBorder: #45B74600/#45B74600 → #32446400/#CFD2D9
```

1.4.2 (2021-06-25)

* Add All Syntax

```Syntax
support.constant,support.constant.json: #FF9070/#FF6D12
```

* Changed All Syntax

```Syntax
typeof: #56B7C3/#00BEC4 → #6495EE/#437AED
```

* Changed bold Syntax

```Syntax
export default, import ... from "...": "" → "bold"
```

1.4.1 (2021-06-24)

* Changed All UI

```UI
gitDecoration.addedResourceForeground: #56B7C3/#00BEC4 → #98C379/#83C654
gitDecoration.conflictingResourceForeground: #E4BF7F/#F0AA0B → #E51400/#EC0000
gitDecoration.deletedResourceForeground: #F02B77/#FA278E → #f14c4c/#f14c4c


minimapGutter.addedBackground: #40AD4100/#44C14500 → #40AD41/#44C145
minimapGutter.deletedBackground: #F14C4C00/#F14C4C00 → #F14C4C/#F14C4C
minimapGutter.modifiedBackground: #A78CFA00/#9277E600 → #A78CFA/#9277E6
```

* Changed Light UI

```UI
gitDecoration.untrackedResourceForeground: #3CAD3C → #3EC141
```

* Changed All Syntax

```Syntax
keyword.control.from,entity.other.keyframe-offset,keyword.control.export, keyword.control.import,keyword.control.at-rule.import, keyword.other.import,keyword.import,keyword.control.default: #CF68E1/#C838C6 → #56B7C3/#00BEC4
```

* Delete All Sytax

```Syntax
variable.other.readwrite.alias: #E06C75/#CD6069 
```

1.4.0 (2021-06-22)

* Changed All UI

```UI
gitDecoration.addedResourceForeground: #8E99B1/#626264D8 → #56B7C3/#00BEC4
gitDecoration.conflictingResourceForeground: #F02B77/#FA278E → #E4BF7F/#F0AA0B
gitDecoration.deletedResourceForeground: #f14c4c/#f14c4c → #F02B77/#FA278E
gitDecoration.renamedResourceForeground: #56B7C3/#00BEC4 → #518DFF/#2276FF
gitDecoration.submoduleResourceForeground: #E4BF7F/#F0AA0B → #FF6AB3/#F183DA
gitDecoration.stageModifiedResourceForeground: #CF68E1/#C838C6 → #D365E5/#d73bd5
```

1.3.9 (2021-06-21)

* Changed All UI

```UI
//和warning颜色区分开，因为可能同时出现这二种情况
gitDecoration.conflictingResourceForeground: #FF9070/#FF6D12 → #F02B77/#FA278E
```

1.3.8 (2021-06-21)

* Added All UI

```UI
gitDecoration.renamedResourceForeground: #56B7C3/#00BEC4
```

1.3.7 (2021-06-21)

* Changed All UI

```UI
gitDecoration.submoduleResourceForeground: #8E99B1/#626264D8 → #E4BF7F/#F0AA0B
gitDecoration.stageDeletedResourceForeground: #f14c4c/#f14c4c → #E06C75/#CD6069
gitDecoration.stageModifiedResourceForeground: #E4BF7F/#F0AA0B → #CF68E1/#C838C6
```

1.3.6 (2021-06-21)

* Added All UI

```UI
gitDecoration.submoduleResourceForeground: #8E99B1/#626264D8
gitDecoration.stageDeletedResourceForeground: #f14c4c/#f14c4c
gitDecoration.stageModifiedResourceForeground: #E4BF7F/#F0AA0B
```

* Fixed All UI

```UI
//已提交的文件
gitDecoration.addedResourceForeground: #8E99B1/#626264D8
//新添加的文件
gitDecoration.untrackedResourceForeground: #7BBE54/#3CAD3C
```

1.3.5 (2021-06-20)

* Changed Bold/Italic Syntax

```Syntax
variable.other.constant.object,support.constant.math: bold/italic
```

* Changed Italic Syntax

```Syntax
Make Variable/String/CSS Class italic. 
```

1.3.4 (2021-06-17)

* Add All UI

```UI
checkbox.background:#21252B/#EDF0F7
checkbox.border:#181a1f/#CED1D7
checkbox.foreground:#B0B7C3/#5D5D5F
```

* Changed All Syntax

```Syntax
constant.language.infinity: #CF68E1/#C838C6 → #FF9070/#FF6D12
```

1.3.3 (2021-06-16)

* Changed Dark UI

```UI
warning: #FF8441 → #FF8A4C
```

1.3.2 (2021-06-15)

* Changed Light UI

```UI
minimap.warningHighlight: #FF6D127F → #FC835799
```

1.3.1 (2021-06-15)

* Changed Light UI

```UI
editorOverviewRuler.warningForeground: #FF6D12 → #FC8357
```

1.3.0（2021-06-14）

* Add All UI

```UI
button.border: #676E9500/#A0A1A700
button.secondaryBackground: #676E9599/#A0A1A7E5
button.secondaryForeground: #DCDFE5/#fff
button.secondaryHoverBackground: #598DEFE6/#0065FFA8
editorOverviewRuler.bracketMatchForeground: #FF907000/#FC835700 → #FF90707F/#FC835762
warning: #FF9070/#FC8357 → #FF8441/#FF6D12
```

* Changed Light UI

```Syntax
number,unit,enum,Math,symbol,id,constant: #FF6500 → #FF6D12
error: #EB0000 → #EC0000
```

1.2.9 (2021-06-07)

* Changed All UI

```UI
textPreformat.foreground: #F5625C/#F5625C → #FF9070/#FC8357
```

1.2.8 (2021-06-01)

* Changed Light UI

```UI
//调淡
minimapSlider.activeBackground: #4F4F5022 → #4F4F5020
minimapSlider.hoverBackground: #4F4F5022 → #4F4F5020
scrollbarSlider.background: #4F4F5022 → #4F4F5020
```

1.2.7 (2021-05-31)

* Changed All UI

```UI
//透明化
editorOverviewRuler.border: #5F668B/#B3B3B4 → #5F668B00/#B3B3B400
```

1.2.6 (2021-05-30)

* Changed Light UI

```UI
//调淡
minimapSlider.activeBackground: #4F4F5033 → #4F4F5022
minimapSlider.hoverBackground: #4F4F5033 → #4F4F5022

scrollbarSlider.activeBackground: #4F4F503F → #4F4F502E
scrollbarSlider.background: #4F4F502E → #4F4F5022
scrollbarSlider.hoverBackground: #4F4F503F → #4F4F502E
```

1.2.5 (2021-05-26)

* Changed All UI

//透明化

```UI
minimapGutter.addedBackground
minimapGutter.deletedBackground
minimapGutter.modifiedBackground
```

//对调

```UI
terminal.ansiBrightYellow
terminal.ansiYellow
```

1.2.4 (2021-05-22)

* Changed All UI

```UI
gitDecoration.deletedResourceForeground: #EB0000/#EB0000 → #f14c4c/#f14c4
```

1.2.3 (2021-05-21)

* Add All UI

```UI
diffEditor.diagonalFill: #5F668B/#C9CCD2
```
<!-- 另外发现加了反而不好看的一条api: diffEditor.border, 加了之后对比文件的页面中间会有条分割线，切断了二边的改动颜色条连接。 -->

* Changed Dark UI

```UI
//略微替提亮点这根线的亮度
editorOverviewRuler.border: #535773 → #5F668B

//这条暂不知道是什么，颜色修改和Light保持一致
textPreformat.foreground: #E4BF7F → #F5625C
```

* Changed Light UI

```UI
error #e51000 → #EB0000
```

* Changed All UI

```UI
//因很多用户反应说#F5625C看着太接近红色了，warning的地方容易让人以为是error。
warning: #F5625C/#F5625C → #FF9070/#FC8357（改为与光标颜色相同）

infoForeground #598DEF → #4480F4

gitDecoration.conflictingResourceForeground: #E4BF7F/#F0AA0B → #F5625C/#FC8357
gitDecoration.deletedResourceForeground: #f14c4c/#f14c4c → #EB0000/#EB0000

inputValidation.errorBackground: #E5140059/#e5140059 → #21252B/#EBEEF5
inputValidation.errorBorder: #E51400/#e51400 → #EB0000/#EB0000
inputValidation.errorForeground: #F5F8FF
inputValidation.infoBackground: #598DEF59/#598DEF59 → #21252B/#EBEEF5
inputValidation.infoBorder: #598DEF/#598DEF → #4480F4/#4480F4
inputValidation.infoForeground: #F5F8FF
inputValidation.warningBackground: #F5625C59/#efbdbf → #21252B/#EBEEF5
inputValidation.warningBorder: #F5625C/#F5625C → #F5625C/#FC8357
inputValidation.warningForeground: #F5F8FF
```

1.2.2 (2021-05-20)

Add some rust Syntax settings.

1.2.1 (2021-05-15)

* Add All Syntax

```Syntax
markup.inline.raw.string: #98c379/#53A053
```

1.2.0 (2021-05-09)

* Add Rust Support

* Add All UI

```UI
imagePreview.border: #282c3400/#EBEEF500
```

1.1.9(2021-05-05)

* Changed All UI

```UI
focusBorder: #2C313A/#EDF0F7 → #4480F4/#4480F4
```

* Add All UI

```UI
list.focusOutline: #598DEF00/#0065FF00
//#5e9cfb由#0065FF99截图取色而来
sash.hoverBorder:#598DEF/#5e9cfb
```

1.1.8(2021-04-18)

* Changed Italic Syntax

```Syntax
Reset italic function names to nomal.
```

1.1.7(2021-04-18)

* Changed Italic Syntax

```Syntax
Italic all (function names,HTML className, CSS property & value) into italic style.
```

1.1.6(2021-04-18)

* Add All Syntax

```Syntax
keyword.other.debugger: #e51400
```

'printf("hello, world");' 是非常著名的一段代码

1.1.5(2021-03-25)

* Add All UI

```UI
tree.indentGuidesStroke: #454963/#CED1D7
```

* Add All Syntax

```Syntax
keyword.other.important:#F02B77/#FA278E
```

1.1.4 (2021-03-22)

* Add All UI

```UI
//这个border的颜色如果不是透明或者跟底色相同，border的样子会呈现点状线。
list.filterMatchBorder: #fff
list.filterMatchBackground: #fff
```

1.1.3 (2021-03-22)

* Changed All UI

```UI
listFilterWidget.background: #F5F8FF → #FFF
listFilterWidget.outline: #F5F8FF → #FFF
```

1.1.2 (2021-03-22)

* Add All UI

```UI
listFilterWidget.background: #F5F8FF
listFilterWidget.outline: #F5F8FF
listFilterWidget.noMatchesOutline: #ff0000
```

1.1.1 (2021-03-21)

* Add All Syntax

```Syntax
```

1.1.0 (2021-03-20)

* Changed All UI

```UI
gitDecoration.addedResourceForeground: #40AD41/#44C145 → #98C379/#53A053
```

* Add All Syntax

```Syntax
source.vue: #8792AA/#A0A1A7
```

1.0.9 (2021-03-19)

* Changed All UI

```UI
//改了所有与delete有关项的色块和文字颜色，和error做了区分，#e51400→#f14c4c
```

1.0.8 (2021-03-18)

* Changed All Syntax

```Syntax
variable.parameter.url.css → variable.parameter.url
```

1.0.7 (2021-03-15)

* Changed All UI

```UI
//把color和BrightColor颜色对调了下,并把BrightYellow颜色改为鼠标竖杆颜色，取消了亮黄色#F8F900/#EAE868在Terminal里的使用
terminal.ansiBrightGreen: #3FB93F/#3FB93F
terminal.ansiBrightYellow: #FF9070/#FC8357
terminal.ansiGreen: #98c379/#53A053
terminal.ansiYellow: #F5625C/#F5625C
```

1.0.6 (2021-03-11)

* Changed Dark UI

```UI
//调淡一点
editorBracketMatch.background: #FF90708C → #FF90707F
```

1.0.5 (2021-03-09)

* Add All UI

```UI
//cmd+shift+p窗口打开默认选项背景色
quickInput.list.focusBackground:#598DEF3F/0065FF19
```

* Changed All UI

```UI
//加深，和Tab框hover颜色保持一致
list.hoverBackground: #598DEF3F/0065FF19 → #598DEF66/#0065FF33

//点击文件列表时的某一文件时，这个框也会出现，所以不好看
focusBorder: #598DEF/#598DEF → #2C313A/#EDF0F7
```

1.0.4 (2021-03-03)

* Delete All Syntax

```Syntax
meta.function-call.c entity.name.function.c: #56B7C3/#00BEC4
```

1.0.3 (2021-01-17)

* Add All Syntax

```Syntax
meta.function-call.c: #B0B7C3/#5D5D5F
meta.function-call.c entity.name.function.c: #56B7C3/#00BEC4, italic
```

* Delete All Syntax

```Syntax
entity.name.function.definition.special.constructor.cpp: #CF68E1/#C838C6
```

* Changed All Syntax

```Syntax
support.function:#56B7C3/#00BEC4, italic → #6495EE/#437AED
```

1.0.2 (2021-01-05)

* Add All Syntax

```Syntax
support.function.builtin.python,meta.function-call.arguments.python support.function.builtin.python: #B0B7C3/#5D5D5F

meta.function-call.python support.function.builtin.python: #56B7C3/#00BEC4

keyword.control.directive.undef, keyword.control.directive.undef punctuation.definition.directive, keyword.other.typedef: #A78CFA/#7C4DFF
```

* Changed All Syntax

```Syntax
storage.type.built-in.primitive.c: #A78CFA/#7C4DFF → #FF6AB3/#EF8ED8
```

1.0.1 (2020-11-01)

* Add All Syntax

```Syntax
storage.type.built-in.c: #FF6AB3/#EF8ED8
```

1.0.0 (2020-09-22)

* Changed All UI

```UI
terminal.ansiBrightRed: #EB0000/#EB0000 → #f14c4c/#f14c4c
terminal.ansiRed: #E06C75/#CD6069 → #EB0000/#EB0000
```

0.9.9 (2020-09-20)

* Changed All UI

```UI
//这行代表Terminal里的Warning字符 (Red代表错误字符)
terminal.ansiBrightYellow: #E4BF7F/#F0AA0B → #F5625C/#F5625C

terminal.ansiMagenta: #FF9070/#FF6500 → #E4BF7F/#F0AA0B
terminal.ansiRed: #EB0000/#EB0000 → #E06C75/#CD6069
```

0.9.8 (2020-09-17)

* Changed All UI

```UI
terminal.ansiRed: #e51400 → #EB0000
```

* Changed Light UI

```UI
//调暗了5°
terminal.ansiYellow: #EFED68 → #EAE868
```

0.9.7 (2020-09-17)

* Changed Light UI

```UI
terminal.ansiBlue: #598DEF → #4d91f8
```

0.9.6 (2020-09-17)

* Changed All UI

```UI
terminal.ansiGreen: #98C379/#53A053 → #45B746/#44C145
terminal.ansiRed: #f14c4c → #e51400
```

* Changed Light UI

```UI
terminal.ansiBlue: #0065FF → #598DEF
terminal.ansiYellow: #F8F900 → #EFED68
```

0.9.5 (2020-09-16)

* Renewal All UI

```UI
terminal.ansiWhite: #B0B7C3/#5D5D5F
```

0.9.4 (2020-09-15)

* Renewal All UI

```UI
terminal.ansiBlue: #598DEF/#0065FF
terminal.ansiBrightWhite: #FF6AB3/#EF8ED8
terminal.ansiMagenta: #FF9070/#FF6500
terminal.ansiRed: #f14c4c/#f14c4c
terminal.ansiYellow: #F8F900/#F8F900
```

0.9.3 (2020-09-15)

* Renewal All UI

```UI
terminal.ansiBlack: #000/#fff
terminal.ansiBlue: #FF6AB3/#EF8ED8
terminal.ansiBrightBlack: #A78CFA/#7C4DFF
terminal.ansiBrightBlue: #6495EE/#437AED
terminal.ansiBrightCyan: #56B7C3/#00BEC4
terminal.ansiBrightGreen: #98C379/#53A053
terminal.ansiBrightMagenta: #CF68E1/#C838C6
terminal.ansiBrightRed: #f14c4c#f14c4c
terminal.ansiBrightWhite: #fff/#000
terminal.ansiBrightYellow: #E4BF7F/#F0AA0B
terminal.ansiCyan: #F02B77/#FA278E
terminal.ansiGreen: #98C379/#53A053
terminal.ansiMagenta: #F8F900
terminal.ansiWhite: #676E95/#A9A9AA
```

0.9.2 (2020-09-10)

* **Add Italic Style**

注释掉这些项是因为从issue35来看terminal.ansiBrightColor是影响Terminal里的特殊行背景色的, 但打开zsh, 又发现这几项会影响头部的系统文字, 而且这种影响是 只要不是填的完全非透明颜色, 颜色的指定设置就会无效, 切相应系统颜色变成似乎是特定的另一种颜色。

* Comment Dark UI

```UI
// terminal.ansiBrightBlue: #56B7C333
// terminal.ansiBrightCyan: #6495EE33
// terminal.ansiBrightRed: #E06C7533
```

* Comment Light UI

```UI
// terminal.ansiBrightBlue: #00BEC433
// terminal.ansiBrightCyan: #55ACF233
// terminal.ansiBrightYellow: #FF650033
// terminal.ansiBrightGreen: #53A05333
```

* Add All Syntax

```Syntax
string.quoted source: #98C379/#53A053
```

<!-- <div align="center">
  <table>
      <tr>
        <th colspan="8"><h3 align="center">Backers</h3></th>
      </tr>
      <tr></tr>
      <tr>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
      </tr>
      <tr></tr>
      <tr>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
        <td>January</td>
      </tr>
  </table>
</div> -->

* Delete README.md

<!-- Eva Theme's ongoing development is inseparable from the support of all generous supporters. If you'd like to join them, please consider: -->

<!-- ### Conflicts

Some extensions add some of their own semantic coloring to cover the theme file, thereby changing the color of some characters. You can disable this feature by turning off 'C_Cpp.enhancedColorization' in the settings. Currently found such extensions are [Babel JavasScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel), [JavaScript Atom Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-atom-grammar), [MS-C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools). -->

<!-- ### Encourage

If you do like this theme, would you please give me a [Github Star ☆](https://github.com/fisheva/Eva-Theme) and [Nice Rating](https://marketplace.visualstudio.com/items/fisheva.Eva-Theme) as reward. Thanks so much! O(∩_∩)O~ -->

* Delete README_CN.md

<!-- ### 冲突

有些插件添加了一些其自身的语义化着色覆盖在主题文件之上, 从而改变了某些字符的颜色。您可以通过在设置里关闭 C_Cpp.enhancedColorization 项来禁用此功能。目前发现的这类插件有[Babel JavasScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel), [Sublime Babel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode), [JavaScript Atom Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-atom-grammar), [MS-C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) -->

<!-- ### 鼓励

如果您喜欢这款主题, 可以给我一颗[Github Star ☆](https://github.com/fisheva/Eva-Theme)和[好评](https://marketplace.visualstudio.com/items/fisheva.Eva-Theme)以示鼓励吗? 感谢! O(∩_∩)O~ -->

0.9.1 (2020-09-06)

* Add All UI

```UI
debugConsole.errorForeground: #e51400
debugConsole.infoForeground: #598DEF
debugConsole.warningForeground: #F5625C
quickInput.background: #21252B/#E1E4EB
quickInput.foreground: #B0B7C3/#626264
quickInputTitle.background: #21252B/#E1E4EB
```

0.8.9~0.9.0(2020-09-05)

README图片由Github图床换到微博图床,github图床国内太慢

<!-- 微博图床403解决办法 https://www.jianshu.com/p/e410a332a504 https://blog.gobyte.cn/post/cfce32d8.html -->

0.8.8(2020-09-04)

* Delete README.md

<!-- ### Issue

(It is great to attach a case code, screenshot & copy) -->

* Delete README_CN.md

<!-- ### Issue

(最好附上案例代码, 截图+拷贝) -->

* Add File .vscodeignore

```.vscodeignore
.git/**
.vscode/**
screenshots/**
README_CN.md
issue_template.md
```

0.8.7(2020-09-04)

* Changed All UI

```UI
//消除标题栏下边沿边框
editorGroupHeader.tabsBorder: #21252B/#E1E4EB → #282c3400/#EBEEF500
```

0.8.6(2020-09-03)

* Changed All UI

```UI
inputOption.activeBackground: #282c3400/#EBEEF500 → #598DEFE6/#0065FFA8
inputOption.activeBorder: #282c3400/#EBEEF500 → #598DEF00/#0065FF00
```

* Changed Light UI

```UI
inputOption.activeForeground: #000 → #fff
```

0.8.2~0.8.5(2020-09-03)

添加截图文件夹, 修改图片索引路径, 改来改去发现只能用https的绝对路径

0.8.1(2020-09-02)

* Delete README.md

<!-- ### Installing

Paste the following command into VSCode extension input and press `Enter`:

```shell
ext install Eva-Theme
```

### Activate

VSCode → Preferences → Color themes → Select Eva theme -->

* Delete README_CN.md

<!-- ### 安装

将下列指令复制进VSCode的扩展输入框，并按下回车`Enter`：

```shell
ext install Eva-Theme
```

### 使用

VSCode → 首选项 → 颜色主题 → 选择Eva Theme -->

0.8.0(2020-08-27)

* Add All UI

```UI
button.foreground: #DCDFE5/#fff
tab.hoverForeground: #d7dae0/#5D5D5F
tab.unfocusedHoverForeground: #d7dae0/#5D5D5F
icon.foreground: #c5c5c5/#424242
inputOption.activeBackground: #282c3400/#EBEEF500
inputOption.activeBorder: #282c3400/#EBEEF500
inputOption.activeForeground: #fff/#000

minimap.background: #282c34/#EBEEF5
minimap.errorHighlight: #e5140059/#e5140059
minimap.findMatchHighlight: #6A707DE5/#BBBEC5
minimap.selectionHighlight: #5F97FFF2/#0065FFB2
minimap.warningHighlight: #F5625C59/#F5625C
minimapGutter.addedBackground: #40AD41/#44C145
minimapGutter.deletedBackground: #e51400/#e51400
minimapGutter.modifiedBackground: #A78CFA/#9277E6
minimapSlider.activeBackground: #A2ABE533/#4F4F5033
minimapSlider.background: #A2ABE519/#4F4F5019
minimapSlider.hoverBackground: #A2ABE533/#4F4F5033
```

* Changed All UI

```UI
//提高标题栏hover背景色
tab.hoverBackground: #598DEF3F/#0065FF19 → #598DEF66/#0065FF33

//提亮输入框激活边框颜色
focusBorder: #598DEFB2/#598DEFA5 → #598DEF/#598DEF

//这条API只能设置透明色或不设置, 任何颜色都会挡住零任务启动页文字
editorGroup.emptyBackground: #282c34/#EBEEF5 → #282c3400/#EBEEF500

//将Dark主题该色块由微蓝色改为灰色, Light主题该色块颜色加深。目前受限于minimap的一些API缺失, 未来该色块还需要调得更显眼。
editorOverviewRuler.findMatchForeground: #598DEF59/#CFD2D9 → #6A707D7F/#C3C6CD

//统一修改项border颜色, 去掉透明度
tab.inactiveModifiedBorder: #A78CFAA5/#7C4DFFA5 → #A78CFA/#7C4DFF
tab.unfocusedActiveModifiedBorder: #A78CFAD8/#7C4DFFD8 → #A78CFA/#7C4DFF
tab.unfocusedInactiveModifiedBorder: #A78CFAA5/#7C4DFF7F → #A78CFA/#7C4DFF

//给这组颜色后缀后加了33, 即80%透明度
terminal.ansiBlack: #676E9533/#A0A1A733
terminal.ansiBlue: #56B7C333/#00BEC433
terminal.ansiCyan: #6494ed33/#55ACF233
terminal.ansiGreen: #45B74633/#45B74633
terminal.ansiMagenta: #CF68E133/#C838C633
terminal.ansiRed: #E06C7533/#CD606933
terminal.ansiWhite: #676E9533/#A0A1A733
terminal.ansiYellow: #FF907033/#FF650033
```

* Changed All Syntax

```Syntax
//提亮=号颜色, 提到和各种括号{} ()一致
keyword.operator.assignment, meta.property-value.css keyword.operator.less: #7C88B4/#888 → #838FA7/#5D5D5FD8
```

//这条最终没改, 留着, 如果未来要改再改成下面这样

<!-- * Changed Dark UI

```UI
//改变后的颜色和框选颜色区分度更大, 但#324464是个不错的背景色, 未来可能有别的用
editor.findMatchHighlightBackground: #324464 → #6A707D59
editor.findMatchHighlightBorder: #32446400 → #6A707D00
``` -->

* Changed Light UI

```UI
//略微调淡滚轮滑块
scrollbarSlider.activeBackground: #4F4F503F
scrollbarSlider.background: #4F4F502E
scrollbarSlider.hoverBackground: #4F4F503F
```

* Changed README.md

```md
Eva Theme is a colorful and semantic coloring code theme meet Visual Studio Code. →
Eva theme is a semantic coloring code theme dedicated to making you more comfortable programming.
```

* Changed README_CN.md

```md
Eva Theme是一款色彩丰富的语义化着色VSCode主题。 →
Eva Theme是一款语义着色代码主题，致力于使您可以更舒适地进行编程。
```

* Changed package.json

```json
"description":"A colorful and semantic coloring code theme. Dark | Light. Regular | Bold" →
"description:A semantic coloring code theme dedicated to making you more comfortable programming."
```

* Delete README.md

<!-- ### Font

The above screenshots' font is [CamingoCode](https://www.fontsquirrel.com/fonts/camingocode). If you like, download and add it into system font folder, then open VSCode → Preferences → Settings :

```json
"editor.fontFamily:CamingoCode",
```

### Icons

After trying multiple icon themes, I think [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons) is the best match for Eva Theme.

### Advanced

For a better experience, I recommend an awesome plugin [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) for you.

Here is my Bracket Pair Colorizer setting:

- Match Eva Dark theme

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
        "#56B7C3,
        "#FF9070"
        ],
        "#e51400"
    ]
```

- Match Eva Light theme

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

### Conflicts

All theme plugins add color to characters based on its scope value. You can check the scope value of all characters by pressing "Ctrl+Shift+P" (Windows) or "Cmd+Shift+P" (Mac) and selecting "Inspect TM Scopes". -->

* Delete README_CN.md

<!-- 
### 字体

上面截图中的字体是 [CamingoCode](https://www.fontsquirrel.com/fonts/camingocode)，如果您喜欢，请下载并安装进系统的字体文件夹，然后 VSCode → 首选项 → 设置：

```json
"editor.fontFamily:CamingoCode",
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
        "#56B7C3,
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

所有主题插件都是基于字符的Scope值给字符分配颜色。同时按下"Ctrl+Shift+P"(Windows)或"Command+Shift+P"(Mac), 选择"检查TM作用域", 您可以查看到所有字符的Scope值。 -->

0.7.9 (2019-12-06)

* Add All UI

```UI
activityBar.activeBackground: #282c34/#EBEEF5
activityBar.activeBorder: #282c34/#EBEEF5
```

* Changed All UI

```UI
//调整非当前功能区按钮键色调与linenumber色调相同
activityBar.inactiveForeground: #8792BDA5/#94969BA5 → #5C617D/#B3B3B4

//将字数限制尺颜色由蓝色调为暗灰
editorRuler.foreground: #6495EE/#55ACF2 → #676E95/#B3B3B4

//Eva-Theme issue 28
terminal.ansiWhite: #FFFFFF → #676E95/#A0A1A7
terminal.ansiBrightWhite: #FFFFFF → #676E95/#A0A1A7
```

* Changed Light UI

```UI
//略微加深当前功能区按钮键颜色
activityBar.foreground: #85878C → #7D7F84

//调整非当前窗口标题颜色与面包屑颜色相同
titleBar.inactiveForeground: #94969B → #8E8E90
```

* Add All Syntax

```Syntax
source: #B0B7C3/#5D5D5F
entity.name.namespace.cpp: #E06C75/#CD6069
entity.name.type.template: #E4BF7F/#F0AA0B
storage.type.template.argument: #FF6AB3/#EF8ED8
storage.modifier.reference, storage.modifier.pointer: #56B7C3/#00BEC4
punctuation.separator.initializers: #8E99B1/#8E8E90
storage.type.template,support.type.built-in.posix-reserved.pthread: #A78CFA/#7C4DFF
entity.name.function.definition.special.constructor.cpp,keyword.cmake: #CF68E1/#C838C6
entity.name.scope-resolution.function, meta.block.class.cpp meta.body.class.cpp meta.block.class.cpp entity.name.function.definition.special.constructor.cpp: #6494ed/#437AED
punctuation.section.angle-brackets, keyword.operator.delete.array.bracket: #838FA7/#5D5D5FD8
keyword.operator.delete, keyword.operator.expression.delete: #F02B77/#FA278E
```

0.7.8 (2019-08-19)

* Changed All UI

```UI
//左侧按键图标由实心图标变成了线框图标, 所以需要加深下颜色
activityBar.foreground: #8792BD/#94969B → #96A4CD/#85878C
activityBar.inactiveForeground: #8792BD99/#94969B99 → #8792BDA5/#94969BA5
```

* Fix All UI

```UI
statusBar.debuggingForeground: #9DA5B3/#9DA5B3 → #DDE0E6/#E1E4Eb
```

0.7.7 (2019-06-14)

* Fix All UI

```UI
editorMarkerNavigation.background: #40AD41/#44C145 → #2F323B/#E3E6ED
```

* Add All UI

```UI
tab.unfocusedActiveBackground: #282c34/#EBEEF5
```

0.7.6 (2019-04-07)

* Fix All UI

```Syntax
editorUnnecessaryCode.opacity: #676E9500/#A9A9AA00 → #676E95FF/#A9A9AAFF
```

0.7.5 (2019-04-07)

* Add All Syntax

```Syntax
meta.function.definition.parameters.cpp storage.type.struct.cpp, meta.function.constructor.cpp storage.type.language.primitive.cpp: #FF6AB3/#EF8ED8
```

0.7.4 (2019-04-07)

* Add All Syntax

```Syntax
meta.function.definition.parameters storage.type.built-in.primitive.c, meta.function.definition.parameters.cpp storage.type.language.primitive.cpp: #FF6AB3/#EF8ED8
```

0.7.3 (2019-04-06)

* Add All Syntax

```Syntax
storage.type.language.primitive.cpp, storage.type.built-in.primitive.c, storage.type.struct.cpp: #A78CFA/#7C4DFF
```

0.7.2 (2018-12-21)

* Add All Syntax

```Syntax
invalid.broken, invalid.deprecated, punctuation.colon: #8E99B1/#8E8E90
support.type.graphql: #FF6AB3/#EF8ED8
keyword.input, keyword.type.graphql: #CF68E1/#C838C6
punctuation.operation.graphql: #838FA7/#5D5D5FD8
```

* Add All System

```System
//这句命令可以查看所有API释义。同时这次通过这个指令, 发现字体样式填normal是警报的, 都替换成了空字符; 并且去掉了警报提示已经启用的UI API, 放在下面。
$schema: vscode://schemas/color-theme,
```

0.7.1 (2018-12-19)

* Changed All UI

```UI
//增加空格符透明度
editorWhitespace.foreground: #535773/#BDBDBED8 → #535773BF/#BDBDBEB2

//Dark滚动条透明度增加40%; Light滚动条透明度减少5%, 但色相更接近主题注释颜色。
scrollbarSlider.activeBackground: #676E9599/#00000033 → #A2ABE54C/#4F4F504C
scrollbarSlider.background: #676E9566/#00000022 → #A2ABE533/#4F4F5033
scrollbarSlider.hoverBackground: #676E9599/#00000033 → #A2ABE54C/#4F4F504C
```

0.7.0 (2018-11-30)

* Changed All UI

```UI
terminalCursor.background: #000000/#000000 → #FFF/#FFF
terminalCursor.foreground: #B0B7C3/#A0A1A7 → #FF9070/#FC8357
```

0.6.9 (2018-11-27)

* Add All Syntax

```Syntax
punctuation.definition.tag.begin source.js, punctuation.definition.tag.end source.js: #8792AA/#A0A1A7
```

0.6.8 (2018-11-27)

* Changed All UI

```UI
//Dark提亮2°, Light调暗2°, 都是变得更显眼。
editor.lineHighlightBackground: #2D3039/#E5E8EF → #2F323B/#E3E6ED
editor.lineHighlightBorder: #2D3039/#E5E8EF → #2F323B00/#E3E6ED00
editor.rangeHighlightBackground: #2D3039/#E5E8EF → #2F323B/#E3E6ED
```

* Add All Syntax

```Syntax
constant.language.import-export-all: #56B7C3/#00BEC4
```

0.6.7 (2018-11-24)

* Add All Syntax

```Syntax
storage.type.const: #A78CFA/#7C4DFF
constant.other.js: #FF9070/#FF6500
meta.delimiter.object.comma: #79859D/#A0A1A7F2
source.js, source.ignore, source.nginx: #B0B7C3/#626264
meta.arguments: #E4BF7F/#F0AA0B
meta.delimiter.property.period: #838FA7/#5D5D5FD8
variable.language.import-all: #56B7C3/#00BEC4
variable: #B0B7C3/#5D5D5F

punctuation.definition.function.body.begin.bracket, punctuation.definition.function.body.end.bracket, punctuation.definition.modules.begin, punctuation.definition.modules.end, constant.character.brace: #838FA7/#5D5D5FD8
```

0.6.6 (2018-11-23)

* Add All Syntax

```Syntax
text.xml, text.html: #B0B7C3/#626264
```

0.6.5 (2018-11-21)

* Add All Syntax

```Syntax
//支持微信小程序
text.html.wxml: #B0B7C3/#626264
```

0.6.4 (2018-11-19)

* Add All Syntax

```Syntax
punctuation.definition.string.begin.html, punctuation.definition.string.end.html: #98c379/#53A053
punctuation.definition.generic.begin.html, punctuation.definition.generic.end.html: #838FA7/#5D5D5FD8
meta.tag.other.html, meta.tag.inline.any.html source.directive.vue meta.brace: #8792AA/#A0A1A7
```

* Delete All Syntax

```Syntax
meta.tag.attributes.js punctuation.section.embedded.begin, meta.tag.attributes.js punctuation.section.embedded.end: #8792AA/#A0A1A7
//删除这二项后, 对应符号颜色控制由punctuation.section.embedded.begin, punctuation.section.embedded.end: #838FA7/#5D5D5FD8
```

0.6.3 (2018-11-17)

* Add All UI

```UI
tab.activeModifiedBorder: #A78CFA/#7C4DFF
tab.inactiveModifiedBorder: #A78CFAA5/#7C4DFFA5
tab.unfocusedActiveModifiedBorder: #A78CFAD8/#7C4DFFD8
tab.unfocusedInactiveModifiedBorder: #A78CFA7F/#7C4DFF7F
```

* Add All Syntax

```Syntax
text.html.derivative: #B0B7C3/#626264
```

0.6.2 (2018-11-12)

* Changed All Syntax

```Syntax
//Improve the experience in VIM mode.
editorCursor.background: #fff/#fff
editorCursor.foreground: #B0B7C3/#A0A1A7 → #FF9070/#FC8357
```

0.6.1 (2018-11-09)

* Add All Syntax

```Syntax
//JSX里的= 和 { }
meta.tag.attributes.js keyword.operator.assignment,
meta.tag.attributes.js punctuation.section.embedded.begin,
meta.tag.attributes.js punctuation.section.embedded.end: #8792AA/#A0A1A7
```

0.6.0 (2018-11-02)

* Add All Syntax

```Syntax
//less里的基础文字颜色
source.css.less: #8A97C3/#888888

//less里的等号 = 颜色
meta.property-value.css keyword.operator.less: #7C88B4/#888888

//CSS里的定义关键帧的百分比数字
entity.other.keyframe-offset.percentage.css: #FF9070/#FF6500

//HTML的style标签里的元素CSS属性的颜色值, 如red, blue等。
support.constant.color.w3c-extented-color-name.css: #B0B7C3/#5D5D5F
```

* Changed All Syntax

```Syntax
variable.parameter.keyframe-list.css: #E4BF7F/#F0AA0B → #B0B7C3/#5D5D5F

meta.property-value.css: #8A97C3/#888888 → #B0B7C3/#5D5D5F

variable.other.constant: #B0B7C3/#5D5D5F → #FF9070/#FF6500
```

* Delete All Syntax

```Syntax
variable.other.constant.object: #B0B7C3/#5D5D5F
```

0.5.9 (2018-10-31)

* Add All Syntax

```Syntax
punctuation.section.keyframes.begin.bracket.curly.css,punctuation.section.keyframes.end.bracket.curly.css: #838FA7CC/#888888D9

meta.at-rule.extend.scss: #98C379/#53A053

meta.property-list.css.sass: #8E99B1/#8E8E90

//sass里的函数参数
source.sass variable.other: #E4BF7F/#F0AA0B

//sass里的某些冒号
sass-script-maps: #8E99B1/#8E8E90

//sass里的逗号
comment.punctuation.comma.sass: #79859D/#A0A1A7F2
```

* Add Light Syntax

```Syntax
meta.function.calc.css: #F0AA0B
```

* Changed All Syntax

```Syntax
source.css.scss: #79859D/#A0A1A7F2 → #8A97C3/#888888
```

0.5.8 (2018-10-12)

* Add All UI

```UI
editorInfo.foreground: #598DEF/#598DEF
```

* Add All Syntax

```Syntax
punctuation.definition.list.begin.markdown: #56B7C3/#00BEC4
```

0.5.7 (2018-10-07)

* Add All UI

```UI
activityBar.inactiveForeground: #8792BD99/#94969B99

editor.snippetFinalTabstopHighlightBackground: #45B7463F/#45B7464C
editor.snippetFinalTabstopHighlightBorder: #535773/#BDBDBED8
editor.snippetTabstopHighlightBackground: #45B7463F/#45B7464C
editor.snippetTabstopHighlightBorder: #45B74600/#45B74600

inputValidation.errorForeground: #DCDFE5/#F5F8FF
inputValidation.infoForeground: #DCDFE5/#F5F8FF
inputValidation.warningForeground: #DCDFE5/#F5F8FF

menu.separatorBackground: #8E99B1/#626264
```

* Fixed Dark UI

```UI
//It was too dark to be seen.
editorWhitespace.foreground: #2C313A → #535773
```

* Changed Light UI

```UI
//Make the color a little lighter.
editorWhitespace.foreground: #BDBDBE → #BDBDBED8
```

0.5.6 (2018-09-27)

* Changed All Syntax

```Syntax
//这一版改变了许多, 关键词
public, static, extends, module: #CF68E1/#C838C6 → #A78CFA/#7C4DFF
return: #A78CFA/#7C4DFF → #CF68E1/#C838C6
//统一了#A78CFA/#7C4DFF颜色作为新建变量的功能。

//其中extends是由于js和TS文件里不能区分开 public, static和extends, 而做出的退让, 使颜色统一 (在java里可以区分)。
```

0.5.5 (2018-09-26)

* Fixed All Syntax

```Syntax
Fixed some bugs in C++, ruby, css files.
```

0.5.4 (2018-09-25)

* Add All Syntax

```Syntax
//修复了HTML里id与class同色的问题, 这一条特殊在于它是二个Scope值叠加, 区分了单独entity.other.attribute-name.html选中的单位。
//Scope值叠加精细选中目标, 以后大有用处。

meta.attribute.id.html entity.other.attribute-name.html: #FF9070
```

0.5.3 (2018-09-17)

* Add All UI

```UI
gitDecoration.addedResourceForeground: #40AD41/#44C145
```

* Fixed All Syntax

```Syntax
Fixed some bugs in Python files.
```

0.5.2 (2018-09-06)

* Add All UI

```UI
breadcrumb.background: #282c34/#EBEEF5
settings.dropdownListBorder: #181A1F/#CED1D7
settings.modifiedItemIndicator: #A78CFA/#7C4DFF
```

0.5.1 (2018-08-29)

* Add All UI

```UI
editorUnnecessaryCode.border: #676E95/#A9A9AA
editorUnnecessaryCode.opacity: 0
```

* Add All Syntax

```Syntax
meta.type.declaration, meta.block.ts : #FF6AB3/#EF8ED8
```

0.5.0 (2018-08-28)

* Fixed Dark Bold Syntax

```Syntax
Fixed some bugs in TypeScript files.
```

0.4.9 (2018-08-18)

* Changed All UI

```UI
editorIndentGuide.activeBackground: #454963/#CED1D7 → #FF9070BF/#FC8357CC
```

* Fixed All Syntax

```Syntax
Fixed some bugs in TypeScript files.
```

0.4.8 (2018-08-16)

* Changed All UI

```UI
menu.background: #282c34/#EBEEF5 → #21252B/#E1E4EB
```

0.4.7 (2018-08-16)

* Changed Light UI

```UI
menu.background: #EEF1F8 → #EBEEF5
```

0.4.6 (2018-08-16)

* Changed Dark UI

```UI
titleBar.activeForeground: #676E95 → #8E99B1
```

* Changed Light UI

```UI
titleBar.inactiveForeground: #5D5D5F → #94969B
```

0.4.5 (2018-08-16)

* Changed All UI

```UI
breadcrumbPicker.background: #23272F/#E1E4EB → #252830/#E5E8EF
```

0.4.4 (2018-08-15)

* Changed All UI

```UI
editorLink.activeForeground: #A78CFA/#7C4DFF → #D73BD5/#D365E5
textLink.activeForeground: #A78CFA#7C4DFF → #D73BD5/#D365E5
```

* Changed Light UI

```UI
menu.background: #EBEEF5 → #EEF1F8
menu.foreground: #8E8E90 → #5D5D5F
```

0.4.3 (2018-08-15)

* Add All UI

```UI
menu.background: #282C34/#EBEEF5
menu.foreground: #8E99B1/#8E8E90
menu.selectionBackground: #598DEFB3/#0065FF99
menu.selectionBorder: #598DEF00/#0065FF00
menu.selectionForeground: #E1E4EA/#fff
menubar.selectionBackground: #598DEFB3/#0065FF99
menubar.selectionBorder: #598DEF00/#0065FF00
menubar.selectionForeground: #E1E4EA/#fff
```

0.4.2 (2018-08-15)

* Add All UI

```UI
settings.checkboxBackground: #23272F/#F1F4FB
settings.checkboxBorder: #181A1F/#CED1D7
settings.checkboxForeground: #9DA5B3/#5D5D5F
settings.dropdownBackground: #23272F/#F1F4FB
settings.dropdownBorder: #181A1F/#CED1D7
settings.dropdownForeground: #9DA5B3/#5D5D5F
settings.headerForeground: #9DA5B3/#5D5D5F
settings.inactiveSelectedItemBorder: #1D1F23/#D3D6DC
settings.modifiedItemForeground: #65E9F5/#00B4BA
settings.numberInputBackground: #23272F/#F1F4FB
settings.numberInputBorder: #181A1F/#CED1D7
settings.numberInputForeground: #9DA5B3/#5D5D5F
settings.textInputBackground: #23272F/#F1F4FB
settings.textInputBorder: #181A1F/#CED1D7
settings.textInputForeground: #9DA5B3/#5D5D5F
```

0.4.1 (2018-08-15)

* Add All UI

```UI
breadcrumb.activeSelectionForeground: #D7DAE0/#5D5D5F
breadcrumb.foreground: #8E99B1/#8E8E90
breadcrumb.focusForeground: #D7DAE0/#5D5D5F
breadcrumbPicker.background: #23272F/#E5E8EF
```

* Add Light UI

```UI
textLink.foreground: #5B87EB
```

* Changed All UI

```UI
button.hoverBackground: #598DEF/#598DEF → #598DEFE6/#0065FFA8
input.border: #282C34/#E5E8EF → #21252B/#E1E4EB
notification.buttonHoverBackground: #598DEF/#598DEF → #598DEFE6/#0065FFA8
```

0.4.0 (2018-08-08)

* Fixed All Syntax

```Syntax
Fixed some bugs in JSX.
```

0.3.9 (2018-07-19)

* Fixed All Syntax

```Syntax
Fixed some bugs in TypeScript files.
```

0.3.8 (2018-07-07)

* Add All UI

```UI
editorGroup.emptyBackground: #282c34/#EBEEF5
editorGroup.focusedEmptyBorder: #5889EA/#4283F5
editorPane.background: #21252B/#E1E4EB
```

0.3.7 (2018-06-24)

* **Support Dart**

0.3.6 (2018-06-18)

* Add All UI

```UI
textCodeBlock.background: #181A1F/#E5E8EF
```

* Changed All UI

```UI
editorGroup.dropBackground: #282C34/#EBEEF5 → #598DEF4C/#0065FF21
```

0.3.5 (2018-06-08)

* Add All UI

```UI
debugToolBar.border: #21252B/#E1E4EB

list.errorForeground: #e51400/#ff0000
list.inactiveFocusBackground: #598DEF3F/#0065FF19
list.invalidItemForeground: #676E95/#A9A9AA (暂未找到位置)
list.warningForeground: #F5625C/#F5625C

panel.background: #282c34/#EBEEF5
panel.dropBackground: #598DEF4C/#0065FF21
peekViewEditorGutter.background: #2D3039/#E5E8EF

sideBar.dropBackground: #598DEF4C/#0065FF21

terminal.border: #21252B/#E1E4EB
textBlockQuote.background: #31353c/#e0e3e9 (提取的默认色)

以下全是透明的:
activityBar.border: #282c3400/#EBEEF500

editor.findMatchBorder: #F8F90000/#F8F90000
editor.findMatchHighlightBorder: #32446400/#CFD2D900
editor.lineHighlightBorder: #2D303900/#E5E8EF00
editor.selectionHighlightBorder: #00809900/#00BEC400
editor.wordHighlightBorder: #00809900/#00BEC400
editor.wordHighlightStrongBorder: #A78CFA00/#7C4DFF00

peekViewEditor.matchHighlightBorder: #598DEF00/#0065FF00

tab.activeBorder: #282c3400/#EBEEF500
tab.activeBorderTop: #282c3400/#EBEEF500
tab.hoverBorder: #598DEF00/#0065FF00
tab.unfocusedActiveBorder: #282c3400/#EBEEF500
tab.unfocusedActiveBorderTop: #282c3400/#EBEEF500
tab.unfocusedHoverBorder: #598DEF00/#0065FF00

titleBar.border: #282c3400/#EBEEF500

```

* Changed All UI

```UI
加深5%
list.dropBackground: #598DEF3F/0065FF19 → #598DEF4C/0065FF21
```

* Changed Light UI

```UI
scrollbarSlider.activeBackground: #00000022 → #00000033
scrollbarSlider.background: #00000011 → #00000022
scrollbarSlider.hoverBackground: #00000022 → #00000033
```

0.3.4 (2018-06-05)

Congratulations on Microsoft's acquisition of GitHub ! \\(≧▽≦)/

* Add All UI

```UI
tab.hoverBackground: #598DEF3F
tab.unfocusedHoverBackground: #598DEF3F
```

* Changed All UI

```UI
statusBarItem.activeBackground: #4283F5/#4283F5 → #598DEFD8/#0065FFB2
statusBarItem.hoverBackground: #598DEF/#598DEF → #598DEF59/#0065FF33
statusBarItem.prominentHoverBackground: #598DEF/#598DEF → #598DEF59/#0065FF33
```

0.3.3 (2018-05-27)

* Add All UI

```UI
editorWidget.border: #21252B/#E1E4EB

gitDecoration.conflictingResourceForeground: #E4BF7F/#F0AA0B
gitDecoration.deletedResourceForeground: #e51400/#ff0000
gitDecoration.ignoredResourceForeground: #676E95/#A9A9AA
gitDecoration.modifiedResourceForeground: #A78CFA/#9277E6
gitDecoration.untrackedResourceForeground: #8E99B1/#626264D8

notifications.border: #181A1F/#AAADB499
notificationCenter.border: #181A1F/#AAADB499
notificationCenterHeader.background: #21252b/#E1E4EB
notificationCenterHeader.foreground: #B0B7C3/#5D5D5F
notification.errorBackground: #e51400/#ff0000
notification.errorForeground: #FFF/#FFF
notificationToast.border: #181A1F/#AAADB499

statusBar.noFolderForeground: #9DA5B3/#5D5D5F

terminal.selectionBackground: #598DEF59/#0065FF3F
terminalCursor.background: #000/#000
terminalCursor.foreground: #B0B7C3/#A0A1A7
```

* Changed All UI

```UI
notification.background: #1F222A/#C3C6CD → #21252b/#C3C6CD
notification.foreground: #FFF/#FFF → #B0B7C3/#5D5D5F
```

* Add Dark UI

```UI
//白色背景系统默认link颜色就很好, 所以不加。
notificationLink.foreground: #598DEF
```

0.3.2 (2018-05-27)

* Changed All UI

```UI
editor.foreground: #B0B7C3E5/#5D5D5FE5 → #C5C5C5/#424242
editorGutter.modifiedBackground: #598DEF/#598DEF → #A78CFA/#9277E6
editorMarkerNavigation.background: #598DEF/#598DEF → #40AD41/#44C145
```

* Add All UI

```UI
editorCursor.background: #000/#000

editorMarkerNavigationInfo.background: #598DEF/#598DEF

editorOverviewRuler.addedForeground: #40AD41/#44C145
editorOverviewRuler.bracketMatchForeground: #FF907000/#FC835700
editorOverviewRuler.commonContentForeground: #2D3039/#E5E8EF
editorOverviewRuler.deletedForeground: #e51400/#ff0000
editorOverviewRuler.errorForeground: #e51400/#ff0000
editorOverviewRuler.findMatchForeground: #598DEF59/#CFD2D9
editorOverviewRuler.infoForeground: #598DEF/#598DEF
editorOverviewRuler.modifiedForeground: #A78CFA/#9277E6
editorOverviewRuler.rangeHighlightForeground: #2D3039/#E5E8EF
editorOverviewRuler.selectionHighlightForeground: #008099BF/#00BEC4AD
editorOverviewRuler.warningForeground: #F5625C/#F5625C
editorOverviewRuler.wordHighlightForeground: #008099BF/#00BEC4AD
editorOverviewRuler.wordHighlightStrongForeground: #A78CFABF/#7C4DFF72
```

0.3.1 (2018-05-25)

* Changed Black UI

```UI
//原透明色导致CSS属性名和注释文字 看不清, 反复调了下这个颜色。
editor.selectionHighlightBackground: #00BEC499 → #006060 → #0088997F → #006661D8 → #0080997F
editor.wordHighlightBackground: #00BEC499 → #006060 → #0088997F → #006661D8 → #0080997F

editorBracketMatch.background: #FF907099 → #FF90708C
```

0.2.7 (2018-05-21)

* Fixed All Syntax

```Syntax
Fixed some bugs in less files.
```

0.2.6 (2018-05-08)

* Fixed All Syntax

```Syntax
Fixed some bugs in Scss files.
```

0.2.5（2018-05-06）

* Add All UI

```UI
editorLineNumber.activeForeground: #9DA5B3/#5D5D5F
```

0.2.4 (2018-05-04)

* Add All UI

```UI
//关掉VSCode 1.23.0 版本新增的 Highlighted indent guides - Helps visualize source code indenting.功能。
editorIndentGuide.activeBackground: #CED1D7
```

0.2.3 (2018-04-22)

* **Support C/C++**

* **Support Ruby**

0.2.2 (2018-04-18)

* **Support C#**

* Add All Syntax

```syntax
//枚举里面的元素 每个都代表一个整数
enum: #FF9070/#ff6500
```

* Changed All Syntax

```syntax
//位运算符号
keyword.operator.bitwise: #CF68E1/#C838C6 → #56B7C3/#00BEC4
```

0.2.1 (2018-04-14)

* **Support PHP**

* Add All UI

```UI
editorGutter.modifiedBackground: #598DEF
editorGutter.addedBackground: #40AD41/#44C145
editorGutter.deletedBackground: #e51400/#ff0000
```

* Changed Light UI

```UI
diffEditor.removedTextBackground: #e514004C → #ff000059
editorMarkerNavigationError.background: #e51400 → #ff0000
inputValidation.errorBackground: #e5140059 → #ff000059
inputValidation.errorBorder: #e51400 → #ff0000
notification.errorBackground: #e51400 → #ff0000
```

0.2.0 (2018-04-11)

* **Support Java**

0.1.9 (2018-04-10)

* **Support Golang**

* fixed many discrepancies between Light & Dark themes.

0.1.8 (2018-04-08)

* Changed All UI

```UI
diffEditor.insertedTextBackground: #45B7463F/#45B7464C
diffEditor.removedTextBackground: #e514003F/#e514004C
merge.currentHeaderBackground: #598DEF59/#0065FF33
merge.currentContentBackground: #45B7463F/#45B7464C
merge.incomingContentBackground: #45B7463F/#45B7464C

//Redesigned peekView
peekView.border: #535773/#BDBDBED8
peekViewEditor.background: #2D3039/#E5E8EF
peekViewEditor.matchHighlightBackground: #598DEF33/#0065FF19
peekViewResult.background: #282c34/#EBEEF5
peekViewResult.fileForeground: #9DA5B3/#626264
peekViewResult.lineForeground: #8E99B1/#888888
peekViewResult.matchHighlightBackground: #282c3400/#EBEEF500
peekViewResult.selectionBackground: #598DEFA5/#0065FF4C
peekViewResult.selectionForeground: #d7dae0/#626264
peekViewTitle.background: #282c34/#EBEEF5
peekViewTitleLabel.foreground: #9DA5B3/#626264
peekViewTitleDescription.foreground: #9DA5B3BF/#888888
```

* Add All UI

```UI
//There are no following api, but them should be, maybe I should make a issue.
statusBarItem.hoverForeground: #FFFFFF
peekViewResult.inactiveSelectionBackground: #598DEFA5/#0065FF4C

Golang := 与 = 区分开来
PHP -= += /= *= %= 与 = 区分开来, 给keyword.operator.string中的 . 单独区分
```

0.1.7 (2018-04-04)

* Add Dark UI

```UI
list.focusForeground: #d7dae0
list.hoverForeground: #d7dae0
```

* Add Light UI

```UI
list.focusForeground: #5D5D5F
list.hoverForeground: #5D5D5F
```

* Changed Light Syntax

```syntax
number、id: #F5625C → #FF6500
warning: #FF6500 → #F5625C
```

0.1.6 (2018-04-01)

* Add Dark UI

```UI
descriptionForeground: #B0B7C3BF
editorGroup.background: #282c34
sideBar.foreground: #8E99B1
sideBarSectionHeader.foreground: #9DA5B3
textBlockQuote.border: #4283F5
textLink.activeForeground: #A78CFA
textLink.foreground: #598DEF
textPreformat.foreground: #E4BF7F
```

* Changed Dark UI

```UI
foreground: #9DA5B3 → #B0B7C3
editorLink.activeForeground: #6494ed → #A78CFA
```

* Add Light UI

```UI
descriptionForeground: #626264BF
editorGroup.background: #EBEEF5
sideBar.foreground: #626264D8
sideBarSectionHeader.foreground: #5D5D5F
textBlockQuote.border: #598DEF
textLink.activeForeground: #7C4DFF
textPreformat.foreground: #F5625C
```

* Changed Light UI

```UI
editorLink.activeForeground: #55ACF2 → #7C4DFF
```

* Changed Light Syntax

```syntax
number、id: #FF9070 → #F5625C
```

0.1.5 (2018-03-24)

* Add Dark UI

```UI
list.inactiveSelectionForeground: #d7dae0
```

* Add Light UI

```UI
list.inactiveSelectionForeground: #5D5D5F
```

0.1.4 (2018-02-11)

* Changed Dark UI

```UI
statusBar.foreground: #676E95 → #9da5b3
```

0.1.3 (2017-11-11)

* **Support Python**

* Changed Light Syntax

```syntax
//Make COMMENT a little darker and clear.
comment: #B3B3B4 → #A9A9AA
panelTitle.inactiveForeground: #A0A1A7 → #A9A9AA

//Make PROPERTY-NAME(CSS属性名) a little darker and clear.
support.type.property-name.css,meta.property-value.css: #94969B→#888888
```

0.1.2 (2017-08-02)

* Add All UI

```UI
selection.background: #598DEF59/#0065FF3F
```

* Fixed All Syntax

```syntax
keyword.operator.css, entity.name.tag.wildcard.scss = #56B7C3/#00BEC4

punctuation.definition.parameters.end.bracket.round.scss, punctuation.definition.parameters.begin.bracket.round.scss = #838FA7CC/#888888BF

source.css.scss = #79859D/#A0A1A7F2
```

0.1.1 (2017-07-12)

* Changed All Syntax

```syntax
entity.other.inherited-class,entity.name.type.interface,meta.return.type = #6495EE/#437AED → #FF6AB3/#EF8ED8, normal → bold(Bold style)
```

* Add All UI

```UI
notification.buttonBackground: #676E9599/#A0A1A7E5,
notification.buttonHoverBackground: #598DEF,
notification.infoBackground: #598DEF,
notification.infoForeground: #FFF,
notification.warningBackground: #ff6500,
notification.warningForeground: #FFF,
notification.errorBackground: #e51400,
notification.errorForeground: #FFF,
```

0.1.0 (2017-07-03)

* Changed Eva Light & Bold Syntax

```syntax
variable.language.this = #FA278C
```

* Changed All Syntax

```syntax
variable.parameter = #E4BF7F/#F0AA0B
```

* Changed Eva Dark/Light Syntax

```syntax
markup.bold.markdown bold → normal
```

0.0.9 (2017-06-30)

* Changed All UI

```UI
editor.foreground = #B0B7C3E5/#5D5D5FE5;
```

* Changed All Syntax

```syntax
variable.parameter  italic → normal;
```

* Added All Syntax

```syntax
entity.name.type.enum = #B0B7C3/#5D5D5F;
variable.other.enummember = #E06C75/#CD6069;
```

0.0.8 (2017-06-29)

* Deleted All Syntax

```syntax
entity.name.type.ts
```

* Add All Syntax

```syntax
{
scope: entity.name.type.alias.ts,meta.return.type,meta.type.annotation;

foreground: #FF6AB3/#EF8ED8
}
```

0.0.7 (2017-06-28)

* Changed All Syntax

```syntax
{
scope:entity.name.type.interface,entity.other.inherited-class,entity.name.type.ts,entity.name.type.alias.ts;

foreground: #FF6AB3/#EF8ED8
}
```

* Changed All UI

```UI
//Changed All red as the same to panel default red color.
terminal.ansiRed: #e51400
```

* Changed All UI

```UI
terminal.ansiBrightMagenta: #C838C6/#CF68E1
terminal.ansiMagenta: #C838C6/#CF68E1
```

0.0.6 (2017-06-27)

* Changed All UI

```UI
terminal.foreground = editor.foreground
terminal.ansiBrightBlue = terminal.ansiBlue
terminal.ansiBrightBlack = terminal.ansiBlack
```

* Changed All Syntax

```syntax
variable.parameter // improve 2° lighter
```

0.0.5 (2017-06-24)

* Changed All UI

```UI
terminal.ansiBrightCyan = terminal.ansiCyan
terminal.ansiBrightGreen = terminal.ansiGreen
terminal.ansiBrightRed = terminal.ansiRed
terminal.ansiBrightYellow = terminal.ansiYellow
```

0.0.4 (2017-06-23)

* Changed All Syntax

```syntax
//Inorder to differentiate variable from text in jsx.
meta.jsx.children.tsx
```

0.0.3 (2017-06-22)

* Changed Eva Light UI

```UI
editorSuggestWidget.foreground
```

* Changed Eva Light Syntax

```syntax
markup.bold.markdown
variable.parameter
```

* Fixed All Syntax

```syntax
support.class.component
```

0.0.2 (2017-06-19)

* Changed Eva Dark UI

```UI
tab.activeForeground
```

* Changed All UI

```UI
debugExceptionWidget.background

debugExceptionWidget.border

debugToolBar.background
```

* Add All UI

```UI
walkThrough.embeddedEditorBackground

welcomePage.buttonBackground

welcomePage.buttonHoverBackground
```

0.0.1 (2017-06-16)

* Initial Version Release

---

* Avoid Using API UI

```UI
sideBarSectionHeader.border 不用加, 加了会使文字向下靠, 不居中

//这三个是双下划线, 非常不宜加。
editorInfo.border
editorWarning.border
editorError.border

//外边缘线, 因底部色块与其它三个方向不同, 故不宜添加此项
window.activeBorder
window.inactiveBorder
```

* Avoid Using API Syntax

```syntax
//覆盖面太广, 同时影响太多元素, 删除后各元素以2级scope值设置颜色

storage.type =  #A78CFA/#7C4DFF

entity.name.type = #FF6AB3/#EF8ED8
```

* Unknown Location API UI

```UI
//待自己测试
editorHint.foreground: #0000ff,
editorHint.border: #00ff00,
textSeparator.foreground: #0000ff,
gitDecoration.submoduleResourceForeground: #ff0000/#ff0000,

//已经写进主题
editorOverviewRuler.commonContentForeground: #2D3039/#E5E8EF,
editorOverviewRuler.currentContentForeground: #FFF/000,
editorOverviewRuler.incomingContentForeground: #45B7463F/#45B7464C,
editorOverviewRuler.rangeHighlightForeground: #2D3039/#E5E8EF,

gitDecoration.addedResourceForeground: #40AD41/#44C145,

merge.commonContentBackground: #2D3039/#E5E8EF,
merge.commonHeaderBackground: #2D3039/#E5E8EF,

pickerGroup.border: #4480F4/#4283F5,
pickerGroup.foreground: #4480F4/#4283F5,

statusBarItem.prominentBackground: #21252B/#E1E4EB,
statusBarItem.prominentHoverBackground: #598DEF/#598DEF,
```

* New version VSCode no longer used API

```UI
editorGroup.background: #282c34/#EBEEF5,

notification.buttonBackground: #676E9599/#A0A1A7E5,
notification.buttonHoverBackground: #598DEFE6/#0065FFA8,
notification.errorBackground: #e51400/#ff0000,
notification.errorForeground: #FFF/#FFF,
notification.infoBackground: #598DEF/#598DEF,
notification.infoForeground: #FFF/FFF,
notification.warningBackground: #F5625C/#F5625C,
notification.warningForeground: #FFF/#FFF,

settings.inactiveSelectedItemBorder: #1D1F23/#D3D6DC,
settings.modifiedItemForeground: #A78CFA/#7C4DFF,
```

* Issue wanted UI

```UI

//Windows下点击链接会有个边框是暗金色, 想定义它的颜色。
editorLink.activeForeground: #D365E5/#D73BD5,

//面包屑里的选择项背景色
breadcrumbPicker.activeSelectionBackground: #ff0000,

//面包屑选框里的文字颜色目前不能定义
breadcrumbPicker.foreground

//原本设置这个属性是透明的,这里存在一个VSCode二个属性editor.selectionHighlightBackground 和 editor.wordHighlightBackground区分不严的问题，值得提issue。
editor.selectionHighlightBackground: #00BEC499/#00BEC459,

//在搜索时, 右侧色块看不到当前目标, 故应该添加2个API
editorOverviewRuler.findMatchHighlightForeground: #ff0000,
editorOverviewRuler.findRangeHighlightForeground: #0000ff,

tab.hoverForeground: #d7dae0,
tab.unfocusedHoverForeground: #d7dae0,
```