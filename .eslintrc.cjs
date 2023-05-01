module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
        "import/prefer-default-export": "off",
        "no-param-reassign": [2, { "props": false }],
        "import/extensions": [
            "error",
            {
                "js": "ignorePackages"
            }
        ]
    },
};
