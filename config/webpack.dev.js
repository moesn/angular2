const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({
    env: ENV
}).metadata, {
    host: HOST,
    port: PORT,
    ENV,
    HMR
});

module.exports = function (options) {
    return webpackMerge(commonConfig({
        env: ENV
    }), {
        devtool: 'cheap-module-source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var'
        },
        plugins: [
            new DefinePlugin({
                ENV: JSON.stringify(METADATA.ENV),
                HMR: METADATA.HMR,
                'process.env': {
                    ENV: JSON.stringify(METADATA.ENV),
                    NODE_ENV: JSON.stringify(METADATA.ENV),
                    HMR: METADATA.HMR
                }
            }),
            new LoaderOptionsPlugin({
                debug: true,
                options: {
                    context: helpers.root('src'),
                    output: {
                        path: helpers.root('dist')
                    },

                    tslint: {
                        emitErrors: false,
                        failOnHint: false,
                        resourcePath: 'src'
                    }
                }
            })
        ],
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: {
                index: '/index.html'
            },
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        },
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    });
};
