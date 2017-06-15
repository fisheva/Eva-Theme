<p align="center"><img src="https://github.com/fisheva/static/blob/master/Eva-VSCode-Theme/Screenshot/Eva-Dark.png?raw=true"></p>
<p align="center"><img src="https://github.com/fisheva/static/blob/master/Eva-VSCode-Theme/Screenshot/Eva-Light.png?raw=true"></p>

[![Marketplace](http://vsmarketplacebadge.apphb.com/version/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme) [![Installs](http://vsmarketplacebadge.apphb.com/installs/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme) [![Ratings](http://vsmarketplacebadge.apphb.com/rating-short/fisheva.eva-vscode-theme.svg)](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme)

> [中文README_CN.md](https://github.com/fisheva/Eva-VSCode-Theme/blob/master/README_CN.md)

### Description
Eva is a colorful and meticulous code theme meet Visual Studio Code.

Four styles in it: Dark, Dark Bold, Light, Light Bold. The Bold styles make keywords and function names thicker.

### Support
Tested with the following languag:
- HTML / XML / JSX
- CSS / LESS / SCSS
- JavaScript / TypeScript
- Markdown
- JSON

Other languages have syntax highlighting too, it's just not guaranteed to be semantic yet.

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
The above screenshots' font is [CamingoCode](https://www.fontsquirrel.com/fonts/camingocode). If you like, download and add it into system font folder, then open VSCode → Preferences → Settings :
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

### Issue
Please note that this theme is not perfect yet. If you find any inconsistency in any language, you can help by reporting issues [here](https://github.com/fisheva/Eva-code-themes), or leave me a message on [Marketplace](https://marketplace.visualstudio.com/items/fisheva.eva-vscode-theme). Thanks for your issues! I will keep updating !

### Encourage
If you do like this theme, would you please give me a [star ☆](https://github.com/fisheva/Eva-VSCode-Theme) as a reward. Thanks so much! O(∩_∩)O~
