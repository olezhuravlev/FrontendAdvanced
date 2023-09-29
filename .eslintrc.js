module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        // "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        "@typescript-eslint/strict-boolean-expressions": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-floating-promises": 0,
    }
}
