var webpack = require('webpack'),
    path = require('path');

var APP = __dirname + '/src';

module.exports = {
    context: __dirname + '/src',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            './main'
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css', '.html'],
        modulesDirectories: ['node_modules']
    },
    devtool: '#inline-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                query: {
                    ignoreDiagnostics: [2403, 2300, 2374, 2375, 2420]
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.(ttf|woff|woff2)/,
                loader: 'file'
            }
        ]
    },
    devServer: {
        contentBase: __dirname
    }
};