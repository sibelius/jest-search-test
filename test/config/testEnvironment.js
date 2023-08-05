const fs = require('fs');
const { TestEnvironment } = require('jest-environment-node');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const cwd = process.cwd();

const globalConfigPath = path.join(cwd, 'globalConfig.json');

class NodeTestEnvironment extends TestEnvironment {
  constructor({ globalConfig, projectConfig }, context) {
    super({ globalConfig, projectConfig }, context);
  }

  async setup() {
    await super.setup();

    const globalConfig = JSON.parse(fs.readFileSync(globalConfigPath, 'utf-8'));

    this.global.__MONGO_URI__ = globalConfig.mongoUri;
    this.global.__MONGO_DB_NAME__ = uuidv4();

    this.global.__COUNTERS__ = {
    };
  }

  async teardown() {
    await super.teardown();
    this.global = {};
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = NodeTestEnvironment;
