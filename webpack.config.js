const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8000,
        open: true
    },
    module: {
        rules: [            
            {
                test: /\.js|\.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: {modules: true} },
                    { loader: "sass-loader" }
                ]
            }, 
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules'),
                ],
                use: [ 'style-loader', 'css-loader' ]
            },                                 
        ]
    },
    resolve: {        
        extensions: ['.js', '.jsx', '.css', '.scss', '/index.js', '/index.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};