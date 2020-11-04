const ver = require('react-native-version')
module.exports = async (pluginConfig, context) => {
  const { logger } = context;
  ver.version();
};