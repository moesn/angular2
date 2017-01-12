const webpack = require('webpack');
const helpers = require('./helpers');

const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const METADATA = {
    title: 'Joker',
    description: 'Fight against landlords',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    const isProd = options.env === 'production';
    return {
        entry: {
            polyfills: './src/polyfills.browser.ts',
            vendor: './src/vendor.browser.ts',
            main: './src/main.browser.ts'
        },
        resolve: {
            extensions: ['.ts', '.js', '.css', '.scss', '.json'],
            modules: [helpers.root('src'), helpers.root('node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'string-replace-loader',
                    query: {
                        search: /(System|SystemJS)(.*[\n\r]\s*\.|\.)import\((.+)\)/g,
                        replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)'
                    },
                    include: [helpers.root('src')],
                    enforce: 'pre'
                },
                {
                    test: /\.ts$/,
                    use: [
                        `@angularclass/hmr-loader?pretty=${!isProd}&prod=${isProd}`,
                        'awesome-typescript-loader',
                        'angular2-template-loader',
                        'angular2-router-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.css$/,
                    use: ['raw-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['raw-loader', 'sass-loader']
                },
                {
                    test: /initial\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!sass-loader?sourceMap'
                    })
                },
                {
                    test: /\.woff(2)?(\?v=.+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=.+)?$/,
                    use: 'file-loader'
                },
                {
                    test: /bootstrap\/dist\/js\/umd\//,
                    use: 'imports-loader?jQuery=jquery'
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }
            ]
        },
        resolveLoader: {
            moduleExtensions: ['-loader']
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'initial.css',
                allChunks: true
            }),
            new AssetsPlugin({
                path: helpers.root('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
            new ForkCheckerPlugin(),
            new CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
                helpers.root('src')
            ),
            new CopyWebpackPlugin([
                {
                    from: 'src/assets',
                    to: 'assets'
                },
                {
                    from: 'src/meta'
                }
            ]),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                title: METADATA.title,
                chunksSortMode: 'dependency',
                metadata: METADATA,
                inject: 'head'
            }),
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'defer'
            }),
            new LoaderOptionsPlugin({}),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether',
                'window.Tether': 'tether',
                Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
                Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
                Button: 'exports-loader?Button!bootstrap/js/dist/button',
                Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
                Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
                Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
                Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
                Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
                Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
                Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
                Util: 'exports-loader?Util!bootstrap/js/dist/util'
            }),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)async/,
                helpers.root('node_modules/@angular/core/src/facade/async.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)collection/,
                helpers.root('node_modules/@angular/core/src/facade/collection.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)errors/,
                helpers.root('node_modules/@angular/core/src/facade/errors.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)lang/,
                helpers.root('node_modules/@angular/core/src/facade/lang.js')
            ),
            new NormalModuleReplacementPlugin(
                /facade(\\|\/)math/,
                helpers.root('node_modules/@angular/core/src/facade/math.js')
            )
        ],
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
};
