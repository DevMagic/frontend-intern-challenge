const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: [
        './public/script/top5.js',
        './public/script/page-landing.js',
        './public/css/main.css',
        './public/css/animation.css',
        './public/css/page-landing.scss'
    ],
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: path.resolve(__dirname),
                            outputPath: 'dist/',
                            useRelativePaths: false
                        }
                    }
                ]
            }
        ],
    }
};