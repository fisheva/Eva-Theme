const fs = require("fs");
const { parse } = require("jsonc-parser");

let light_content = fs.readFileSync("../jsonc/lightUI.jsonc", "utf-8"),
    dark_content = fs.readFileSync("../jsonc/darkUI.jsonc", "utf-8"),
    syntax_content = fs.readFileSync("../jsonc/syntax.jsonc", "utf-8");

let light = parse(light_content),
    dark = parse(dark_content),
    syntax = parse(syntax_content);

// console.log("light========",light);
// let light = require('../json/lightUI.json'), dark = require('../json/darkUI.json'), syntax = require('../json/syntax.json');

let output = {
    "Eva-Light": {},
    "Eva-Light-Italic": {},
    "Eva-Light-Bold": {},
    "Eva-Light-Italic-Bold": {},
    "Eva-Dark": {},
    "Eva-Dark-Italic": {},
    "Eva-Dark-Bold": {},
    "Eva-Dark-Italic-Bold": {},
};

for (let i in output) {
    if (i.indexOf("Light") > -1) {
        light.name = i.replace(/-/g, " ");
        output[i] = {
            ...light,
            type: "light",
            tokenColors: scope2token("light", i),
        };
    } else {
        dark.name = i.replace(/-/g, " ");
        output[i] = {
            ...dark,
            type: "dark",
            tokenColors: scope2token("dark", i),
        };
    }
    writeFile(`../themes/${i}.json`,output[i]);
}

// console.log("output========",output);

function writeFile(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.log("写入文件时出错：", err);
        }else{
            console.log(path+"写入文件成功！");
        }
    });
}

function scope2token(type, file) {
    let token = [];
    file =
        type == "light"
            ? file.replace("-Light", "")
            : file.replace("-Dark", "");
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
