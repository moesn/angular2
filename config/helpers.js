const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
    return process.argv.join('').indexOf(flag) > -1;
}

function isWebpackDevServer() {
    return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
}

function root(...args) {
    return path.join(...[ROOT].concat(args));
}

exports.hasProcessFlag = hasProcessFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;