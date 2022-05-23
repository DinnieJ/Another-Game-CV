const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const compilier = Webpack(config);
const option = {...WebpackDevServer.option, open: true}
const server = new WebpackDevServer(option, compilier);


(async () => {
    await server.start();
})();