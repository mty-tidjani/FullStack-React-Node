// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { env } = process;

const config = {
  rabbit: {
    host: env.RABBITMQ_HOST,
    port: env.RABBITMQ_PORT,
    user: env.RABBITMQ_USER,
    password: env.RABBITMQ_PASSWORD,
    vhost: env.RABBITMQ_VHOST,
  },
  datasources: {
    mongo: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      dbName: env.DB_NAME,
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
