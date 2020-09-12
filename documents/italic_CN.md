Copy the following settings to your VSCode "setting.json" file, then it is the Eva Theme Italic.

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "comment",
          "entity.name.type.class",
          "constant",
          "storage.modifier",
          "storage.type",
          "variable.language.this",
          "entity.other.attribute-name",
          "variable.parameter"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  },
```