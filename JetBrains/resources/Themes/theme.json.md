# 主题配置文件注释

## colors
- `viewportForeground`: 前景色
- `viewportBackground`: 背景色
- `treeBackground`: 树控件的背景颜色

## ui
- `Viewport.background`: 视口背景色
- `Viewport.foreground`: 视口前景色
- `Tree.background`: 树控件背景色
- `Button.hoverBackground`: 按钮悬停背景色
- `Button.selectedBackground`: 按钮选中背景色
- `Button.selectedForeground`: 按钮选中前景色
- `Panel.background`: 面板背景色
- `Tree.selectionBackground`: 点击文件树上的一个文件时，该文件的背景色
- `Tree.selectionInactiveBackground`: 点击文件树上的一个文件后，鼠标点击其它地方后，该文件的背景色
- `*.borderColor`: "panelInput.border": "#dddddd"
- `*.focusedBorderColor`: focus框的边线
- `*.focusColor`: focus框外围的光圈
- `*.foreground`: 可以设置menu里的字
- `Tree.foreground`: "sideBar.foreground": "#626264" //这里不能用带有透明度的颜色，不然字体会发虚
- `StatusBar.Widget.foreground`: screenshots-30, "statusBar.foreground": "#5D5D5F"
- "#0065FF99" 代替 "#0065FFA8" 成为Light里的button hover颜色
- Light下 "#5A98F7" 代替 "#0065FF99", Dark下 "#486EB5" 代替 "#598DEFB3"
- `Link.activeForeground`: "textLink.foreground": "#4d91f8"
- `*.selectionBackground` 同时影响一些下拉菜单的hover背景色(最好#bcd2f7) 和 menubar的active(按下时 #5A98F7)的背景色，如果找到其中一个的具体设置，再改另外一个。
- `DialogWrapper.southPanelBackground`、`TextField.background`、`Button.background` 这几个颜色需要保持一致, "#EBEEF5" 或 "#F1F4FB", 现在由于设置弹窗左下角问号按钮右侧有一小片阴影同时也受 `Panel.background`影响，故上面三个要和Panel保持一致，暂时只能设为"#EBEEF5"。
- `TableHeader.bottomSeparatorColor` 和 `TableHeader.separatorColor` 颜色要一致。
- `ProgressBar.indeterminateEndColor` 和 `ProgressBar.indeterminateStartColor` 不好复现，但不设置页很好看。
- `Actions.GreyInline.Dark` 的 "#848486" 是 "#8E8E90" 降低10亮度得来的。
- `Objects.Blue` 在 "#00BEC4" 和 "#5A98F7" 摇摆不定。
- error框背景色#ECCDD3，warning框背景色#F1DDB4，info框背景色#C5D8F7，modified框背景色#D5CDF7，insert框背景色#B9E1BE，success框背景色#CAE5D2/#BCE1C1/#B9E1BE。
- 颜色配套：`List.background`: "#EBEEF5"/"#E1E4EB", `Menu.background`: "#EBEEF5"/"#E1E4EB", `NotificationsToolwindow.newNotification.background`: "#E1E4EB"/"#EBEEF5",  `Popup.borderColor`: "#CED1D7"/"#DDDDDD"
- 没有warning却不生效的api: `Notification.ToolWindow.warningBorderColor` `Notification.ToolWindow.warningForeground`
## icons