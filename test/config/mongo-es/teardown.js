const { stopElasticsearchLocal } = require('../es/esSetup');

module.exports = async () => {
  await global.__MONGOD__.stop();

  await stopElasticsearchLocal();
};
