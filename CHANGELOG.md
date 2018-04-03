0.1.8

* Changed all

```
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

```
//There is no following api, but it should be, maybe I should make a issue.
statusBarItem.hoverForeground: #FFFFFF
peekViewResult.inactiveSelectionBackground: #598DEFA5/#0065FF4C
```

0.1.7

* Add Dark

```
list.focusForeground: #d7dae0
list.hoverForeground: #d7dae0
```

* Add Light

```
list.focusForeground: #5D5D5F
list.hoverForeground: #5D5D5F
```

* Changed Light

```
number、id: #F5625C → #FF6500
warning: #FF6500 → #F5625C
```

0.1.6 (2018-04-01)

* Add Dark

```
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

```
foreground: #9DA5B3 → #B0B7C3
editorLink.activeForeground: #6494ed → #A78CFA
```

* Add Light

```
descriptionForeground: #626264BF
editorGroup.background: #EBEEF5
sideBar.foreground: #626264D8
sideBarSectionHeader.foreground: #5D5D5F
textBlockQuote.border: #598DEF
textLink.activeForeground: #7C4DFF
textPreformat.foreground: #F5625C
```

* Changed Light

```
editorLink.activeForeground: #55ACF2 → #7C4DFF
number、id: #FF9070 → #F5625C
```

0.1.5 (2018-03-24)

* Add Dark

```
list.inactiveSelectionForeground: #d7dae0
```

* Add Light

```
list.inactiveSelectionForeground: #5D5D5F
```

0.1.4 (2018-02-11)

* Changed Dark

```
statusBar.foreground: #676E95 → #9da5b3
```

0.1.3 (2017-11-11)

* Add all

```
Add self keyword in Python.
```

* Changed Light

```
//Make COMMENT a little darker and clear.
comment: #B3B3B4 → #A9A9AA
panelTitle.inactiveForeground: #A0A1A7 → #A9A9AA

//Make PROPERTY-NAME(CSS属性名) a little darker and clear.
support.type.property-name.css,meta.property-value.css: #94969B→#888888
```

0.1.2 (2017-08-02)

* Add all

```
selection.background: #598DEF59/#0065FF3F
```

* Fixed all

```

keyword.operator.css, entity.name.tag.wildcard.scss = #56B7C3/#00BEC4

punctuation.definition.parameters.end.bracket.round.scss, punctuation.definition.parameters.begin.bracket.round.scss = #838FA7CC/#888888BF

source.css.scss = #79859D/#A0A1A7F2

```

0.1.1 (2017-07-12)

* Changed all

```
entity.other.inherited-class,meta.type.annotation,entity.name.type.interface,meta.return.type = #6495EE/#437AED → #FF6AB3/#EF8ED8, normal → bold(Bold style)
```

* Add all

```
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

```
variable.language.this = #FA278C
```

* Changed all

```
variable.parameter = #E4BF7F/#F0AA0B
```

* Changed Eva Dark/Light

```
markup.bold.markdown bold → normal
```

0.0.9 (2017-06-30)

* Changed all

```
variable.parameter  italic → normal;
editor.foreground = #B0B7C3E5/#5D5D5FE5;
```

* Added all

```
entity.name.type.enum = #B0B7C3/#5D5D5F;
variable.other.enummember = #E06C75/#CD6069;
```

0.0.8 (2017-06-29)

* Deleted all

```
entity.name.type.ts
```

* Add all

```
{
scope: entity.name.type.alias.ts,meta.return.type,meta.type.annotation;

foreground: #FF6AB3/#EF8ED8
}
```

0.0.7 (2017-06-28)

* Changed all

```
{
scope:entity.name.type.interface,entity.other.inherited-class,entity.name.type.ts,entity.name.type.alias.ts;

foreground: #FF6AB3/#EF8ED8
}
```

* Changed All

```
//Changed all red as the same to panel default red color.
terminal.ansiRed: #e51400
```

* Changed All

```
terminal.ansiBrightMagenta:#C838C6/#CF68E1
terminal.ansiMagenta:#C838C6/#CF68E1
```

0.0.6 (2017-06-27)

* Changed All

```
variable.parameter // improve 2° lighter
terminal.foreground = editor.foreground
terminal.ansiBrightBlue = terminal.ansiBlue
terminal.ansiBrightBlack = terminal.ansiBlack
```

0.0.5 (2017-06-24)

* Changed All

```
terminal.ansiBrightCyan = terminal.ansiCyan
terminal.ansiBrightGreen = terminal.ansiGreen
terminal.ansiBrightRed = terminal.ansiRed
terminal.ansiBrightYellow = terminal.ansiYellow
```

0.0.4 (2017-06-23)

* Changed All

```
//Inorder to differentiate variable from text in jsx.
meta.jsx.children.tsx
```

0.0.3 (2017-06-22)

* Changed Eva Light

```
markup.bold.markdown
variable.parameter
editorSuggestWidget.foreground
```

* Fixed All

```
support.class.component
```

0.0.2 (2017-06-19)

* Changed Eva Dark

```
tab.activeForeground
```

* Changed All

```
debugExceptionWidget.background

debugExceptionWidget.border

debugToolBar.background
```

* Add All

```
walkThrough.embeddedEditorBackground

welcomePage.buttonBackground

welcomePage.buttonHoverBackground
```

0.0.1 (2017-06-16)

* Initial Version Release