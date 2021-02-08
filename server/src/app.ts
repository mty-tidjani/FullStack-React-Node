import config from './core/config';
import server from '.';

server.listen(config.appPort, () => {
  global.logger.info(`Server Listening at ${config.appPort}`);
});
