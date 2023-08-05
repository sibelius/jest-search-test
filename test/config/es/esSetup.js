const { startEngine, stopEngine } = require('@geek-fun/jest-search');

const esSearchConfig = {
  engine: 'elasticsearch', // or 'opensearch' or 'zincsearch'
  version: '8.8.2',
  port: 9600,
  clusterName: 'jest-search-local',
  nodeName: 'jest-search-local',
}

const startElasticsearchLocal = async () => {
  // ES_TEST='jest-search' DEBUG='jest-search'
  await startEngine(esSearchConfig);
}

const stopElasticsearchLocal = async () => {
  await stopEngine();
}

module.exports.startElasticsearchLocal = startElasticsearchLocal;
module.exports.stopElasticsearchLocal = stopElasticsearchLocal