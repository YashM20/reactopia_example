const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

// allow @/ to be used as an alias for the src/ directory
const config = {

};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
