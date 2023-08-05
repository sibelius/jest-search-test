import { Client } from '@elastic/elasticsearch';

export const esClient = new Client({
    node: process.env.ELASTICSEARCH,
    maxRetries: 3,
    requestTimeout: 3000,
  })
