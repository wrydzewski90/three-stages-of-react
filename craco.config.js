const CracoAlias = require('craco-alias');
const sassResourcesLoader = require('sass-loader');
const path = require('path');
const {whenDev} = require('@craco/craco');

module.exports = {
    devServer: whenDev(() => ({
        port: 3000,
    })),
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
        {
            plugin: sassResourcesLoader,
            options: {
                resources: [path.resolve(__dirname, './src/App.scss')],
            },
        },
    ],
};
