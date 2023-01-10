module.exports = {
    '(src|build|mock)/**/*.{js,jsx,ts,tsx}': [
        'eslint --fix',
        'prettier --write',
    ],
    '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
    '*src/**/*.{css,scss,postcss,less}': [
        'stylelint --fix',
        'prettier --write',
    ],
    '*.md': ['prettier --write'],
}
