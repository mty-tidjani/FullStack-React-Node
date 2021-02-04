import { connect } from 'mongoose';
import config from '../config';

const dbConnect = (): Promise<unknown> => {
  const { url: MONGO_URL } = config.datasources.mongo;

  return new Promise((res, rej) => {
    connect(MONGO_URL, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      global.logger.info('Database pluged in');
      res(undefined);
    }).catch((err) => {
      global.logger.error('Database not in!', MONGO_URL);
      rej(err);
    });
  });
};

export default dbConnect;
