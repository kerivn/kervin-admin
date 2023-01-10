module.exports = {
    '!(public|dist)/*.{vue,js,jsx,ts,tsx}': [
        'eslint --fix',
        'prettier --write',
    ],
    '*.{css,scss,postcss,less}': ['prettier --write'],
}
