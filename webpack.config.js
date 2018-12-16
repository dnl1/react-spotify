const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
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
                template: "./public/index.html", //source html
                favicon: 'src/assets/images/favicon.png',
                inject: true
            }),
            new HtmlWebPackPlugin({ //HACK TO HANDLE BROWSERROUTE ON GITHUB PAGES
                hash: true,
                filename: "404.html", //target html
                template: "./public/index.html", //source html
                favicon: 'src/assets/images/favicon.png',
                inject: true
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
                },
                {
                    from: './src/manifest.json',
                    to: 'manifest.json'
                }
            ]),
            new SWPrecacheWebpackPlugin({
                // By default, a cache-busting query parameter is appended to requests
                // used to populate the caches, to ensure the responses are fresh.
                // If a URL is already hashed by Webpack, then there is no concern
                // about it being stale, and the cache-busting can be skipped.
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                logger(message) {
                    if (message.indexOf('Total precache size is') === 0) {
                        // This message occurs for every build and is a bit too noisy.
                        return;
                    }
                    if (message.indexOf('Skipping static resource') === 0) {
                        // This message obscures real errors so we ignore it.
                        // https://github.com/facebookincubator/create-react-app/issues/2612
                        return;
                    }
                    console.log(message);
                },
                minify: true,
                // For unknown URLs, fallback to the index page
                navigateFallback: envKeys.PUBLIC_PATH + '/index.html',
                // Ignores URLs starting from /__ (useful for Firebase):
                // https://github.com/facebookincubator/create-react-app/issues/2237#issuecomment-302693219
                navigateFallbackWhitelist: [/^(?!\/__).*/],
                // Don't precache sourcemaps (they're large) and build asset manifest:
                staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
            }),
        ]
    }
}