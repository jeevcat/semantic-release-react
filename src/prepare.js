const ver = require('react-native-version')
module.exports = async (pluginConfig, context) => {
  const { logger } = context;
  logger.logger("Setting iOS and Android version.");
  const versionResult = await ver.version(projectPath = '.');
  logger.logger(versionResult);
};