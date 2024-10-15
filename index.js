module.exports = {
    "printWidth": 120,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "bracketSpacing": true,
    "endOfLine": "auto",
    "useTabs": false,
    "importOrder": [
        '^react$',
        '^react-icons/(.*$)',
        "^next$",
        "^next/(.*)$",
        "@/app/(.*)$",
        "@/hooks/(.*)$",
        '@/components/(.*)$',
        "@/shared/(.*)$",
        "@/entries/(.*)$",
        "@/utils/(.*)$",
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
