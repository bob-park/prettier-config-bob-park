module.exports = {
    "printWidth": 80,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "bracketSpacing": true,
    "endOfLine": "auto",
    "useTabs": false,
    "importOrder": [
        "^react",
        "^next(/.*)$",
        "@/hooks/(.*)$",
        "@/utils/(.*)$",
        "@/shared/(.*)$",
        "@/entries/(.*)$",
        "<THIRD_PARTY_MODULES>",
        "^[./]"
    ],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "plugins": [
        "@trivago/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss"
    ]
}
