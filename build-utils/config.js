const developWebpackFile = require('./webpack.dev');
const productionWebpackFile = require('./webpack.prod');
const bundleanalyzeFile = require('./addons/webpack.bundleanalyze');

const envFiles = {
  prod: productionWebpackFile,
  dev: developWebpackFile,
};

const addOnFiles = {
  bundleanalyze: bundleanalyzeFile,
};

module.exports = {
  addOnFiles,
  envFiles,
};
