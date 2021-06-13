const { addOnFiles } = require('./config');

/**
 * Gets webpack addons. Addon must be defined in ./config.js and package.json.
 *
 * @param {Array} addonArgs - Webpack argument passed in via package.json script.
 */
const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons.filter(Boolean).map((addon) => addOnFiles[addon]);
};

module.exports = getAddons;
