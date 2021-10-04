const path = require('path');

module.exports = {
    baseUrl: './src',
    resolve: {
        alias: {
            assets: path.join(__dirname, 'src/assets'),
        },
    },
    externals: ['react'],
};
