import type { IndexRequest } from '@elastic/elasticsearch/lib/api/types';
import { esClient } from '../esClient';
import { connectMongoose } from '../connectMongoose';
import { cleanupTest } from '../cleanupTest';
import { disconnectMongoose } from '../disconnectMongoose';

beforeAll(connectMongoose);

beforeEach(cleanupTest);

afterAll(disconnectMongoose);

it('create an index and query the index', async () => {
  const index = 'myindex';
  const id = 'myid';
  const document = {
    name: 'myname',
    tenant: 'mytenant',
  }

  const indexRequest: IndexRequest = {
    index,
    id,
    document,
  };

  console.log('before');
  const indexed = await esClient.index(indexRequest);

  console.log({
    indexed,
  });

  const search = 'myna';

  const searchQuery = {
    index,
    size: 200,
    query: {
      bool: {
        must: [
          { query_string: { query: `${search}*` } },
        ],
      }
    }
  }

  const searchResult = await esClient.search(searchQuery);

  console.log({
    searchResult,
  });
});
