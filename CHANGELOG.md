0.2.2 (2018-04-18)

* **Support C#**

* Add all

```syntax
//枚举里面的元素 每个都代表一个整数
enum: #FF9070/#ff6500
```

* Changed all

```syntax
//位运算符号
keyword.operator.bitwise: #CF68E1/#C838C6 → #56B7C3/#00BEC4
```

0.2.1 (2018-04-14)

* **Support PHP**

* Add all

```UI
editorGutter.modifiedBackground: #598DEF
editorGutter.addedBackground: #40AD41/#44C145
editorGutter.deletedBackground: #e51400/#ff0000
```

* Changed Light

```UI
diffEditor.removedTextBackground: #e514004C → #ff000059
editorMarkerNavigationError.background: #e51400 → #ff0000
inputValidation.errorBackground: #e5140059 → #ff000059
inputValidation.errorBorder: #e51400 → #ff0000
notification.errorBackground: #e51400 → #ff0000
```

0.2.0 (2018-04-11)

* **Support Java**

* Deleted all

```syntax
//覆盖面太广, 同时影响太多元素, 删除后各元素以2级scope值设置颜色

storage.type =  #A78CFA/#7C4DFF

entity.name.type = #FF6AB3/#EF8ED8
```

0.1.9 (2018-04-10)

* **Support Golang**

* fixed many discrepancies between Light & Dark themes.

0.1.8 (2018-04-08)

* Changed all

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

* Add all

```UI
//There are no following api, but them should be, maybe I should make a issue.
statusBarItem.hoverForeground: #FFFFFF
peekViewResult.inactiveSelectionBackground: #598DEFA5/#0065FF4C

Golang := 与 = 区分开来
PHP -= += /= *= %= 与 = 区分开来, 给keyword.operator.string中的 . 单独区分
```

0.1.7 (2018-04-04)

* Add Dark

```UI
list.focusForeground: #d7dae0
list.hoverForeground: #d7dae0
```

* Add Light

```UI
list.focusForeground: #5D5D5F
list.hoverForeground: #5D5D5F
```

* Changed Light

```syntax
number、id: #F5625C → #FF6500
warning: #FF6500 → #F5625C
```

0.1.6 (2018-04-01)

* Add Dark

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

* Changed Dark

```UI
foreground: #9DA5B3 → #B0B7C3
editorLink.activeForeground: #6494ed → #A78CFA
```

* Add Light

```UI
descriptionForeground: #626264BF
editorGroup.background: #EBEEF5
sideBar.foreground: #626264D8
sideBarSectionHeader.foreground: #5D5D5F
textBlockQuote.border: #598DEF
textLink.activeForeground: #7C4DFF
textPreformat.foreground: #F5625C
```

* Changed Light

```UI
editorLink.activeForeground: #55ACF2 → #7C4DFF
```

```syntax
number、id: #FF9070 → #F5625C
```

0.1.5 (2018-03-24)

* Add Dark

```UI
list.inactiveSelectionForeground: #d7dae0
```

* Add Light

```UI
list.inactiveSelectionForeground: #5D5D5F
```

0.1.4 (2018-02-11)

* Changed Dark

```UI
statusBar.foreground: #676E95 → #9da5b3
```

0.1.3 (2017-11-11)

* **Support Python**

* Changed Light

```syntax
//Make COMMENT a little darker and clear.
comment: #B3B3B4 → #A9A9AA
panelTitle.inactiveForeground: #A0A1A7 → #A9A9AA

//Make PROPERTY-NAME(CSS属性名) a little darker and clear.
support.type.property-name.css,meta.property-value.css: #94969B→#888888
```

0.1.2 (2017-08-02)

* Add all

```UI
selection.background: #598DEF59/#0065FF3F
```

* Fixed all

```syntax
keyword.operator.css, entity.name.tag.wildcard.scss = #56B7C3/#00BEC4

punctuation.definition.parameters.end.bracket.round.scss, punctuation.definition.parameters.begin.bracket.round.scss = #838FA7CC/#888888BF

source.css.scss = #79859D/#A0A1A7F2
```

0.1.1 (2017-07-12)

* Changed all

```syntax
entity.other.inherited-class,entity.name.type.interface,meta.return.type = #6495EE/#437AED → #FF6AB3/#EF8ED8, normal → bold(Bold style)
```

* Add all

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

* Changed Eva Light & Bold

```syntax
variable.language.this = #FA278C
```

* Changed all

```syntax
variable.parameter = #E4BF7F/#F0AA0B
```

* Changed Eva Dark/Light

```syntax
markup.bold.markdown bold → normal
```

0.0.9 (2017-06-30)

* Changed all

```syntax
variable.parameter  italic → normal;
```

```UI
editor.foreground = #B0B7C3E5/#5D5D5FE5;
```

* Added all

```syntax
entity.name.type.enum = #B0B7C3/#5D5D5F;
variable.other.enummember = #E06C75/#CD6069;
```

0.0.8 (2017-06-29)

* Deleted all

```syntax
entity.name.type.ts
```

* Add all

```syntax
{
scope: entity.name.type.alias.ts,meta.return.type,meta.type.annotation;

foreground: #FF6AB3/#EF8ED8
}
```

0.0.7 (2017-06-28)

* Changed all

```syntax
{
scope:entity.name.type.interface,entity.other.inherited-class,entity.name.type.ts,entity.name.type.alias.ts;

foreground: #FF6AB3/#EF8ED8
}
```

* Changed All

```UI
//Changed all red as the same to panel default red color.
terminal.ansiRed: #e51400
```

* Changed All

```UI
terminal.ansiBrightMagenta:#C838C6/#CF68E1
terminal.ansiMagenta:#C838C6/#CF68E1
```

0.0.6 (2017-06-27)

* Changed All

```UI
terminal.foreground = editor.foreground
terminal.ansiBrightBlue = terminal.ansiBlue
terminal.ansiBrightBlack = terminal.ansiBlack
```

```syntax
variable.parameter // improve 2° lighter
```

0.0.5 (2017-06-24)

* Changed All

```UI
terminal.ansiBrightCyan = terminal.ansiCyan
terminal.ansiBrightGreen = terminal.ansiGreen
terminal.ansiBrightRed = terminal.ansiRed
terminal.ansiBrightYellow = terminal.ansiYellow
```

0.0.4 (2017-06-23)

* Changed All

```syntax
//Inorder to differentiate variable from text in jsx.
meta.jsx.children.tsx
```

0.0.3 (2017-06-22)

* Changed Eva Light

```syntax
markup.bold.markdown
variable.parameter
```

```UI
editorSuggestWidget.foreground
```

* Fixed All

```syntax
support.class.component
```

0.0.2 (2017-06-19)

* Changed Eva Dark

```UI
tab.activeForeground
```

* Changed All

```UI
debugExceptionWidget.background

debugExceptionWidget.border

debugToolBar.background
```

* Add All

```UI
walkThrough.embeddedEditorBackground

welcomePage.buttonBackground

welcomePage.buttonHoverBackground
```

0.0.1 (2017-06-16)

* Initial Version Release