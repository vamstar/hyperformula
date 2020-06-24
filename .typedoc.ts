module.exports = {
  "inputFiles": [
    "./src/HyperFormula.ts",
    "./src/Config.ts",
    "./src/Emitter.ts",
  ],
  "exclude": [
    "./test/**",
    "./src/interpreter/**",
    "./src/i18n/**",
    "./src/parser/**",
    "./src/dependencyTransformers/**",
    "./src/DependencyGraph/**",
    "./src/ColumnSearch/**",
  ],
  "mode": "file",
  "out": "./typedoc",
  "excludeExternals": true,
  "excludeProtected": true,
  "excludePrivate": true,
  "hideGenerator": true,
  "stripInternal": true,
  "plugin": "none",
  "name": "HyperFormula API",
  "disableSources": false,
  "categoryOrder": [
    "License",
    "Engine",
    "Formula Syntax",
    "Factories",
    "Instance",
    "Sheets",
    "Ranges",
    "Rows",
    "Columns",
    "Cells",
    "Named Expressions",
    "Helpers",
    "Clipboard",
    "Undo and Redo",
    "Batch",
    "Events",
    "Custom Functions",
    "*",
    "Static Methods",
    "Static Properties",
  ],
  "toc": [
    "HyperFormula",
    "Config",
    "Emitter"
  ]
}