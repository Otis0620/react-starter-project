const { merge } = require('webpack-merge');
const { envFiles } = require('./config');
const commonConfig = require('./webpack.common');
const getAddons = require('./get-addons');

/**
 * Main webpack function used to merge dev and prod together.
 *
 * @param {string} env - Webpack environment variable.
 * @param {string} addon - Webpack addon.
 */
module.exports = ({ env, addon }) =>
  merge(commonConfig, envFiles[env], ...getAddons(addon));
