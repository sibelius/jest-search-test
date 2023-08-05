import { esClient } from './esClient';

export const cleanupTest = async () => {
  if (typeof jest === 'undefined') {
    return;
  }

  if (esClient) {
    const result = await esClient.cat.indices({ format: 'json' });

    const indexNames = result.map((item) => item.index);

    for (const indexName of indexNames) {
      await esClient.indices.delete({ index: indexName });
      // eslint-disable-next-line no-console
      console.log(`Deleted index: ${indexName}`);
    }
  }
};
