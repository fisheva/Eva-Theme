<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Things/master/Static/Eva-Theme/Screenshot/Eva-Dark2.png"></p>
<p align="center"><img src="https://raw.githubusercontent.com/fisheva/Things/master/Static/Eva-Theme/Screenshot/Eva-Light2.png"></p>

[![install](http://vsmarketplacebadge.apphb.com/installs/fisheva.eva-theme.svg?style=flat-flat)](https://marketplace.visualstudio.com/items?itemName=fisheva.eva-theme) [![rating](http://vsmarketplacebadge.apphb.com/rating-short/fisheva.eva-theme.svg?style=flat)](https://marketplace.visualstudio.com/items/fisheva.eva-theme)  [![GitHub stars](https://img.shields.io/github/stars/fisheva/eva-theme.svg?style=social&label=Star&maxAge=2592000)](https://github.com/fisheva/eva-theme)

[中文README_CN.md](https://github.com/fisheva/Eva-Theme/blob/master/README_CN.md)

### Description

Eva Theme is a colorful and semantic coloring code theme meet Visual Studio Code.

There are four styles in it: Dark, Dark Bold, Light, Light Bold. The Bold styles make keywords and function names thicker.

Requires a minimum of 1.12.0 VSCode version.

### Support

Tested with the following languages in native environment, except derived frameworks:

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
"editor.fontFamily": "CamingoCode",
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
        "#56B7C3",
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

All theme plugins add color to characters based on its scope value.

You can check the scope value of all characters by pressing "Ctrl+Shift+P" (Windows) or "Cmd+Shift+P" (Mac) and selecting "Inspect TM Scopes".

Any plugin that changes the syntax highlighting rules will change the scope value of some characters and then change their color. e.g. "Babel", "JavaScript Atom Grammar".

### Issue

Please note that this theme is not perfect yet. If you find any inconsistency in any language, you can help by reporting issues [here](https://github.com/fisheva/Eva-Theme/issues)(It is great to attach a case code, screenshot & copy), or leave me a comment on [Marketplace](https://marketplace.visualstudio.com/items/fisheva.eva-theme). Thanks for your issues! I will keep updating!

### Encourage

If you do like this theme, would you please give me a [Github Star ☆](https://github.com/fisheva/Eva-Theme) and [Nice Rating](https://marketplace.visualstudio.com/items/fisheva.eva-theme) as reward. Thanks so much! O(∩_∩)O~