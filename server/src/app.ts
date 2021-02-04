import * as http from 'http';
import * as express from 'express';
import config from './V1/core/config';
import logger from './V1/core/logger';

const app = express();

const server = http.createServer(app);

server.listen(config.appPort, () => {
  logger.info(`Server Listening at ${config.appPort}`);
});
