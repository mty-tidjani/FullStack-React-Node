// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { env } = process;

const config = {
  datasources: {
    mongo: {
      url: env.MONGO_URL || '',
    },
  },
  redis: {
    port: Number(env.REDIS_PORT || ''),
    host: env.REDIS_HOST,
  },
  logDir: env.LOG_PATH || '',
  logFile: env.LOG_FILE_NAME,
  env: env.NODE_ENV,
  appPort: env.SERVER_PORT,
  jwt: process.env.JWT_SECRET || '',
};

export default config;
