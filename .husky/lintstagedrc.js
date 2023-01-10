module.exports = {
    '(src|build|mock)/**/*.{js,jsx,ts,tsx}': [
        'eslint --fix',
        'prettier --write',
    ],
    '*.vue': ['eslint --fix', 'prettier --write'],
    '*src/**/*.{css,scss,postcss,less}': [
        'prettier --write',
    ],
    '*.md': ['prettier --write'],
}
