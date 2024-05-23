中文： [font-style-rules_CN.md](https://github.com/fisheva/Eva-Theme/blob/master/documents/font-style-rules_CN.md)

### The special font styles of the Eva Theme include: bold, italic, underline.

### Bold
The bold style is used to emphasize important keywords.

In both Bold and Italic Bold versions, the font style for keywords or symbols that need to be set to bold includes:
1. Keywords that create, define, or declare meanings, such as `let` `const` `var`; or similar forms, such as `import`.
2. Boolean values `false` `true`; comparison symbols such as `==` `===` `>` `<`; and conditional keywords like `if` `else if` `else`.
3. Flow control keywords such as `for` `return` `export default`.
4. Function names; Arrow function symbols `=>`.
5. Other important keywords, such as `this` `debugger` `delete` (JS), `!important` (CSS), `self` (Python).
6. Special cases where the bold style is retained even in the normal version: 1) bold text in markdown; 2) property access symbol dot `.`.

### Italic
The italic style is for users who prefer italic text, with the principle of making text italicized as much as possible without affecting the readability of the code.

In both Italic and Italic Bold versions, characters that are **normal** (not italic) include:
1. All punctuations and symbols.
2. HTML tags.
3. All characters within regular expressions.
4. Escape characters, such as `&nbsp;`.

In the normal and Bold versions, characters that remain **italic**: italic text in markdown.

### Underline
The underline style is only used to mark unused variables.