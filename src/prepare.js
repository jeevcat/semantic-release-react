const ver = require('react-native-version')
module.exports = async (pluginConfig, context) => {
  const { logger } = context;
  logger.log("Setting iOS and Android version.");
  const versionResult = await ver.version(projectPath = '.');
  logger.log(versionResult);
};