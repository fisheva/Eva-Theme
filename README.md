<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Eva-VSCode-Theme/master/static/Screenshot/Eva-Dark.png"></p>
<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Eva-VSCode-Theme/master/static/Screenshot/Eva-Light.png"></p>

[![Marketplace](http://vsmarketplacebadge.apphb.com/version/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme) [![Installs](http://vsmarketplacebadge.apphb.com/installs/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme) [![Ratings](http://vsmarketplacebadge.apphb.com/rating-short/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme)

> 中文版README_CN.md

### Description
Eva is a colorful and meticulous code theme meet Visual Studio Code.

There are four styles : Dark, Dark Bold, Light, Light Bold. The Bold styles make keywords and function names thicker.

### Installing
Paste the following command into VSCode extention input and press `Enter`:
```shell
ext install
```
### Activate
VSCode → Preferences → Color themes → Select Eva theme

### Attention
There is a little bug when switching themes in VSCode. You can not switch Dark with Dark Bold, or Light with Light Bold **directly**. Please change color while changing bold style.

### Font
The above screenshots based on CamingoCode font, If you like, the files are ready in CamingoCode folder(~/.vscode/extensions/Eva-VSCode-Theme/static/CamingoCode). Put them into system font folder, then open VSCode → Preferences → Setting :
```json
"editor.fontFamily": "CamingoCode"
```
### Recommendation
For a better experience, I recommend an awesome plugin [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) for you.

Here is my Bracket Pair Colorizer setting:

- Match Eva Dark theme
```json
"bracketPairColorizer.consecutivePairColors": [
        "()",
        "[]",
        "{}",
        [
        "#838FA7",
        "#56B7C3",
        "#E4BF7F",
        "#A78CFA",
        "#CD6069"
        ],
        "#f42a2a"
    ]
```

- Match Eva Light theme
```json
"bracketPairColorizer.consecutivePairColors": [
        "()",
        "[]",
        "{}",
        [
        "#5D5D5FD8",
        "#00BEC4",
        "#FF9070",
        "#7C4DFF",
        "#CD6069"
        ],
        "#f42a2a"
    ]
```


### Customize
If you want to change some color personaly, you can setting like this:
```json
"workbench.colorCustomizations":{
  "tab.activeBackground": "#282c34",
  "activityBar.background": "#282c34",
  "editorGroup.background": "#282c34",
  "sideBar.background": "#282c34"
}
```
#### Scope
VSCode comes with a built-in tool to easily obtain the scope of a piece of syntax.

Press `ctrl(⌘) + shift + P`, input `dev`, then choose "Developer:Inspect TM Scopes" option.


### Developer
Please note that this theme is still in Beta(β) release. If you find any inconsistency in any language, you can help by reporting issues [here](https://github.com/fisheva/Eva-code-themes). Thanks for your issues !
