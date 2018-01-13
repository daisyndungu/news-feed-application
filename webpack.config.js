module.exports = {
    entry: './source/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                // always start with style loader
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.scss$/,
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
    }
};
