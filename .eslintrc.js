module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'next/core-web-vitals',
        'next',
        'prettier',
    ],
    plugins: ['prettier'],
    rules: {
        'no-tabs': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
}
