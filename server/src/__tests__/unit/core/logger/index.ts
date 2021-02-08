import { join } from 'path';

import { format, createLogger, transports } from 'winston';
import config from '../config';

import * as Wdrf from 'winston-daily-rotate-file';

const { combine, timestamp, printf } = format;

const myFormat = printf((info) => `${info.timestamp}  ${info.level}: ${info.message} ${info.stack ? `Stack: ${info.stack}` : ''}`);

const dir = join(__dirname, config.logDir);

const rotativeTransport = new (Wdrf)({
  dirname: dir,
  filename: config.logFile,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    rotativeTransport,
    new transports.File({
      filename: '_error.log',
      level: 'error',
      dirname: dir,
    }),
    new transports.Console(),
  ],
});

export default logger;
