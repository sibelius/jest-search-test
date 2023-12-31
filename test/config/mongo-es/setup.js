const fs = require('fs');
const MMS = require('mongodb-memory-server-global');
const { join } = require('path');

const { startElasticsearchLocal } = require('../es/esSetup');

const cwd = process.cwd();

const globalConfigPath = join(cwd, 'globalConfig.json');
// eslint-disable-next-line
const { MongoMemoryServer, MongoMemoryReplSet } = MMS;

const mongod = new MongoMemoryServer({
  binary: {
    systemBinary: process.env.MONGODB_BINARY,
    skipMD5: true,
  },
  // debug: true,
  autoStart: false,
});

module.exports = async () => {
  if (!mongod.isRunning) {
    await mongod.start();
  }

  const mongoConfig = {
    mongoUri: await mongod.getUri(),
  };

  // save mongo uri to be reused in each test
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

  await startElasticsearchLocal();

  global.__MONGOD__ = mongod;
};
