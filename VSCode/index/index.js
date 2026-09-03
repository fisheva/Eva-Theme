const fs = require("fs");
const { parse } = require("jsonc-parser");

let light = parse(fs.readFileSync("../jsonc/lightUI.jsonc", "utf-8")),
    dark = parse(fs.readFileSync("../jsonc/darkUI.jsonc", "utf-8")),
    darkCharcoal = parse(fs.readFileSync("../jsonc/darkCharcoalUI.jsonc", "utf-8")),
    darkMidnight = parse(fs.readFileSync("../jsonc/darkMidnightUI.jsonc", "utf-8")),
    syntax = parse(fs.readFileSync("../jsonc/syntax.jsonc", "utf-8"));

let output = {
    // Original Eva Themes
    "Eva-Light": { ui: light, type: "light" },
    "Eva-Light-Italic": { ui: light, type: "light" },
    "Eva-Light-Bold": { ui: light, type: "light" },
    "Eva-Light-Italic-Bold": { ui: light, type: "light" },
    "Eva-Dark": { ui: dark, type: "dark" },
    "Eva-Dark-Italic": { ui: dark, type: "dark" },
    "Eva-Dark-Bold": { ui: dark, type: "dark" },
    "Eva-Dark-Italic-Bold": { ui: dark, type: "dark" },

    // Eva Dark Charcoal (#202020)
    "Eva-Dark-Charcoal": { ui: darkCharcoal, type: "dark" },
    "Eva-Dark-Charcoal-Italic": { ui: darkCharcoal, type: "dark" },
    "Eva-Dark-Charcoal-Bold": { ui: darkCharcoal, type: "dark" },
    "Eva-Dark-Charcoal-Italic-Bold": { ui: darkCharcoal, type: "dark" },

    // Eva Dark Midnight (#101010)
    "Eva-Dark-Midnight": { ui: darkMidnight, type: "dark" },
    "Eva-Dark-Midnight-Italic": { ui: darkMidnight, type: "dark" },
    "Eva-Dark-Midnight-Bold": { ui: darkMidnight, type: "dark" },
    "Eva-Dark-Midnight-Italic-Bold": { ui: darkMidnight, type: "dark" },
};

for (let name in output) {
    const config = output[name];
    const themeObj = JSON.parse(JSON.stringify(config.ui));
    themeObj.name = name.replace(/-/g, " ");
    const finalTheme = {
        ...themeObj,
        type: config.type,
        tokenColors: scope2token(config.type, name),
    };
    writeFile(`../themes/${name}.json`, finalTheme);
}

function writeFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

function scope2token(type, file) {
    let token = [];
    file = file
        .replace("-Light", "")
        .replace("-Dark", "")
        .replace("-Charcoal", "")
        .replace("-Midnight", "");
    for (let i in syntax) {
        let obj = {
            name: syntax[i].name,
            scope: i,
            settings: {
                foreground: syntax[i].foreground[type],
                fontStyle: syntax[i].fontStyle[file] || "",
            },
        };
        token.push(obj);
    }
    return token;
}
