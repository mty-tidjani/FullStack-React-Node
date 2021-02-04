/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @description This file used to creates global varialbles for the projec
 * t. NOTE: If you are making a variable global then you have to be sure if that variable is worthy to be a global or not.
 */

import { join } from 'path';

import { format, createLogger, transports } from 'winston';
import config from '../config';

import * as Wdrf from 'winston-daily-rotate-file';

//extending the global's interface for new variables
declare global {
    namespace NodeJS {
        interface Global {
            log: typeof log,
            logger: typeof logger
        }
    }
}

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

const log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

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

//making variables accessible throughout the project
export const initGlobals = (): void => {
  global.log = log;
  global.logger = logger;
};
