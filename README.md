<p align="center"><img src="https://github.com/fisheva/Static/blob/master/Eva-Theme/Screenshot/Eva-Dark2.png?raw=true"></p>
<p align="center"><img src="https://github.com/fisheva/Static/blob/master/Eva-Theme/Screenshot/Eva-Light2.png?raw=true"></p>

[![install](http://vsmarketplacebadge.apphb.com/installs/fisheva.eva-theme.svg?style=flat-flat)](https://marketplace.visualstudio.com/items?itemName=fisheva.eva-theme) [![rating](http://vsmarketplacebadge.apphb.com/rating-short/fisheva.eva-theme.svg?style=flat)](https://marketplace.visualstudio.com/items/fisheva.eva-theme)  [![GitHub stars](https://img.shields.io/github/stars/fisheva/eva-theme.svg?style=social&label=Star&maxAge=2592000)](https://github.com/fisheva/eva-theme)

> [中文README_CN.md](https://github.com/fisheva/Eva-Theme/blob/master/README_CN.md)

### Description

Eva is a colorful and meticulous code theme meet Visual Studio Code.

Four styles in it: Dark, Dark Bold, Light, Light Bold. The Bold styles make keywords and function names thicker.

### Support

Tested with the following languages in native environment, except derived frameworks:

- HTML / XML / JSX
- CSS / LESS / SCSS
- JavaScript / TypeScript
- C#
- Java
- PHP
- Pyhton
- Golang
- JSON
- Markdown

Other languages have syntax highlighting too, it's just not guaranteed to be semantic yet.

### Installing

Paste the following command into VSCode extension input and press `Enter`:

```shell
ext install eva-theme
```

### Activate

VSCode → Preferences → Color themes → Select Eva theme

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
        "#E06C75"
        ],
        "#e51400"
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
        "#e51400"
    ]
```

### Issue

Please note that this theme is not perfect yet. If you find any inconsistency in any language, you can help by reporting issues [here](https://github.com/fisheva/Eva-Theme/issues), or leave me a message on [Marketplace](https://marketplace.visualstudio.com/items/fisheva.eva-theme). Thanks for your issues! I will keep updating !

### Encourage

If you do like this theme, would you please give me a [Github Star ☆](https://github.com/fisheva/Eva-Theme) and [Nice Rating](https://marketplace.visualstudio.com/items/fisheva.eva-theme) as reward. Thanks so much! O(∩_∩)O~
