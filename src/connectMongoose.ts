import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

// v6
const mongooseOptions = {
  autoIndex: true,
  connectTimeoutMS: 30000,
  minPoolSize: 1,
  socketTimeoutMS: 30000,
};

export async function connectMongoose() {
  jest.setTimeout(20000);

  return mongoose.connect(global.__MONGO_URI__, {
    ...mongooseOptions,
    dbName: global.__MONGO_DB_NAME__,
  });
}
