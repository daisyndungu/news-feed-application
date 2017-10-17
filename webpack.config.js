module.exports = {
    entry: './app/app.js',
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
                loader: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    },
    devServer: {
        port: 3000
    }
};
