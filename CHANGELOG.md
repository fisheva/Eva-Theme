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

```Sytax
editorUnnecessaryCode.opacity: #676E9500/#A9A9AA00 → #676E95FF/#A9A9AAFF
```

0.7.5 (2019-04-07)

* Add All Sytax

```Sytax
meta.function.definition.parameters.cpp storage.type.struct.cpp, meta.function.constructor.cpp storage.type.language.primitive.cpp: #FF6AB3/#EF8ED8
```

0.7.4 (2019-04-07)

* Add All Sytax

```Sytax
meta.function.definition.parameters storage.type.built-in.primitive.c, meta.function.definition.parameters.cpp storage.type.language.primitive.cpp: #FF6AB3/#EF8ED8
```

0.7.3 (2019-04-06)

* Add All Sytax

```Sytax
storage.type.language.primitive.cpp, storage.type.built-in.primitive.c, storage.type.struct.cpp: #A78CFA/#7C4DFF
```

0.7.2 (2018-12-21)

* Add All Sytax

```Sytax
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

* Add All Sytax

```Sytax
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

* Add All Sytax

```Sytax
constant.language.import-export-all: #56B7C3/#00BEC4
```

0.6.7 (2018-11-24)

* Add All Sytax

```Sytax
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

* Add All Sytax

```Sytax
text.xml, text.html: #B0B7C3/#626264
```

0.6.5 (2018-11-21)

* Add All Sytax

```Sytax
//支持微信小程序
text.html.wxml: #B0B7C3/#626264
```

0.6.4 (2018-11-19)

* Add All Sytax

```Sytax
punctuation.definition.string.begin.html, punctuation.definition.string.end.html: #98c379/#53A053
punctuation.definition.generic.begin.html, punctuation.definition.generic.end.html: #838FA7/#5D5D5FD8
meta.tag.other.html, meta.tag.inline.any.html source.directive.vue meta.brace: #8792AA/#A0A1A7
```

* Delete All Sytax

```Sytax
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

* Add All Sytax

```Sytax
text.html.derivative: #B0B7C3/#626264
```

0.6.2 (2018-11-12)

* Changed All Sytax

```Sytax
//Improve the experience in VIM mode.
editorCursor.background: #fff/#fff
editorCursor.foreground: #B0B7C3/#A0A1A7 → #FF9070/#FC8357
```

0.6.1 (2018-11-09)

* Add All Sytax

```Sytax
//JSX里的= 和 { }
meta.tag.attributes.js keyword.operator.assignment,
meta.tag.attributes.js punctuation.section.embedded.begin,
meta.tag.attributes.js punctuation.section.embedded.end: #8792AA/#A0A1A7
```

0.6.0 (2018-11-02)

* Add All Sytax

```Sytax
//less里的基础文字颜色
source.css.less: #8A97C3/#888888

//less里的等号 = 颜色
meta.property-value.css keyword.operator.less: #7C88B4/#888888

//CSS里的定义关键帧的百分比数字
entity.other.keyframe-offset.percentage.css: #FF9070/#FF6500

//HTML的style标签里的元素CSS属性的颜色值, 如red, blue等。
support.constant.color.w3c-extented-color-name.css: #B0B7C3/#5D5D5F
```

* Changed All Sytax

```Sytax
variable.parameter.keyframe-list.css: #E4BF7F/#F0AA0B → #B0B7C3/#5D5D5F

meta.property-value.css: #8A97C3/#888888 → #B0B7C3/#5D5D5F

variable.other.constant: #B0B7C3/#5D5D5F → #FF9070/#FF6500
```

* Delete All Sytax

```Sytax
variable.other.constant.object: #B0B7C3/#5D5D5F
```

0.5.9 (2018-10-31)

* Add All Sytax

```Sytax
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

* Add Light Sytax

```Sytax
meta.function.calc.css: #F0AA0B
```

* Changed All Sytax

```Sytax
source.css.scss: #79859D/#A0A1A7F2 → #8A97C3/#888888
```

0.5.8 (2018-10-12)

* Add All UI

```UI
editorInfo.foreground: #598DEF/#598DEF
```

* Add All Sytax

```Sytax
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

* Changed All Sytax

```Sytax
//这一版改变了许多, 关键词
public, static, extends, module: #CF68E1/#C838C6 → #A78CFA/#7C4DFF
return: #A78CFA/#7C4DFF → #CF68E1/#C838C6
//统一了#A78CFA/#7C4DFF颜色作为新建变量的功能。

//其中extends是由于js和TS文件里不能区分开 public, static和extends, 而做出的退让, 使颜色统一 (在java里可以区分)。
```

0.5.5 (2018-09-26)

* Fixed All Sytax

```Sytax
Fixed some bugs in C++, ruby, css files.
```

0.5.4 (2018-09-25)

* Add All Sytax

```Sytax
//修复了HTML里id与class同色的问题, 这一条特殊在于它是二个Scope值叠加, 区分了单独entity.other.attribute-name.html选中的单位。
//Scope值叠加精细选中目标, 以后大有用处。

meta.attribute.id.html entity.other.attribute-name.html: #FF9070
```

0.5.3 (2018-09-17)

* Add All UI

```UI
gitDecoration.addedResourceForeground: #40AD41/#44C145
```

* Fixed All Sytax

```Sytax
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

* Add All Sytax

```Sytax
meta.type.declaration, meta.block.ts : #FF6AB3/#EF8ED8
```

0.5.0 (2018-08-28)

* Fixed Dark Bold Sytax

```Sytax
Fixed some bugs in TypeScript files.
```

0.4.9 (2018-08-18)

* Changed All UI

```UI
editorIndentGuide.activeBackground: #454963/#CED1D7 → #FF9070BF/#FC8357CC
```

* Fixed All Sytax

```Sytax
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

* Fixed All Sytax

```Sytax
Fixed some bugs in JSX.
```

0.3.9 (2018-07-19)

* Fixed All Sytax

```Sytax
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

* Fixed All Sytax

```Sytax
Fixed some bugs in less files.
```

0.2.6 (2018-05-08)

* Fixed All Sytax

```Sytax
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
editorIndentGuide.activeBackground:#CED1D7
```

0.2.3 (2018-04-22)

* **Support C/C++**

* **Support Ruby**

0.2.2 (2018-04-18)

* **Support C#**

* Add All Sytax

```syntax
//枚举里面的元素 每个都代表一个整数
enum: #FF9070/#ff6500
```

* Changed All Sytax

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

* Changed Light Sytax

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

* Changed Light Sytax

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

* Changed Light Sytax

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

* Fixed All Sytax

```syntax
keyword.operator.css, entity.name.tag.wildcard.scss = #56B7C3/#00BEC4

punctuation.definition.parameters.end.bracket.round.scss, punctuation.definition.parameters.begin.bracket.round.scss = #838FA7CC/#888888BF

source.css.scss = #79859D/#A0A1A7F2
```

0.1.1 (2017-07-12)

* Changed All Sytax

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

* Changed Eva Light & Bold Sytax

```syntax
variable.language.this = #FA278C
```

* Changed All Sytax

```syntax
variable.parameter = #E4BF7F/#F0AA0B
```

* Changed Eva Dark/Light Sytax

```syntax
markup.bold.markdown bold → normal
```

0.0.9 (2017-06-30)

* Changed All UI

```UI
editor.foreground = #B0B7C3E5/#5D5D5FE5;
```

* Changed All Sytax

```syntax
variable.parameter  italic → normal;
```

* Added All Sytax

```syntax
entity.name.type.enum = #B0B7C3/#5D5D5F;
variable.other.enummember = #E06C75/#CD6069;
```

0.0.8 (2017-06-29)

* Deleted All Sytax

```syntax
entity.name.type.ts
```

* Add All Sytax

```syntax
{
scope: entity.name.type.alias.ts,meta.return.type,meta.type.annotation;

foreground: #FF6AB3/#EF8ED8
}
```

0.0.7 (2017-06-28)

* Changed All Sytax

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
terminal.ansiBrightMagenta:#C838C6/#CF68E1
terminal.ansiMagenta:#C838C6/#CF68E1
```

0.0.6 (2017-06-27)

* Changed All UI

```UI
terminal.foreground = editor.foreground
terminal.ansiBrightBlue = terminal.ansiBlue
terminal.ansiBrightBlack = terminal.ansiBlack
```

* Changed All Sytax

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

* Changed All Sytax

```syntax
//Inorder to differentiate variable from text in jsx.
meta.jsx.children.tsx
```

0.0.3 (2017-06-22)

* Changed Eva Light UI

```UI
editorSuggestWidget.foreground
```

* Changed Eva Light Sytax

```syntax
markup.bold.markdown
variable.parameter
```

* Fixed All Sytax

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
```

* Avoid Using API Sytax

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