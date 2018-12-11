const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = (e, argv) => {
    const isProduction = (argv.mode === 'production');

    const env = dotenv.config({
        path: isProduction ? './.env.production' : './.env'
    }).parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        devtool: 'source-map',
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "bundle.js",
            publicPath: isProduction ? '/react-spotify/' : '/'
        },
        devServer: {
            historyApiFallback: true,
            inline: true,
            stats: 'errors-only',
            compress: isProduction,
            contentBase: '/'
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            extends: path.join(__dirname + '/.babelrc'),
                            cacheDirectory: true
                        }
                    }
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            publicPath: isProduction ? '/react-spotify/' : '/'
                        }
                    }]
                }, {
                    test: /\.svg$/,
                    loaders: [
                        'babel-loader',
                        {
                            loader: 'react-svg-loader',
                            query: {
                                jsx: true
                            }
                        },
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                hash: true,
                filename: "index.html", //target html
                template: "./public/index.html" //source html
            }),
            new ExtractTextPlugin({
                filename: 'css/style.css'
            }),
            new webpack.DefinePlugin(envKeys),
            new CopyWebpackPlugin([{
                    from: './src/assets/images/*.png',
                    to: 'assets/images/[name].png'
                },
                {
                    from: './src/assets/images/*.svg',
                    to: 'assets/images/[name].svg'
                }
            ])
        ]
    }
}