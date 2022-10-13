import winston from 'winston';
import WinstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';

const logDir = 'logs'; // logs 디렉토리 하위에 로그 파일 저장
const { printf } = winston.format;

// Define log format
const logFormat = printf((info) => {
    return `${moment().format('YYYY-MM-DD HH:mm:ss')} [${info.level}] ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
    transports: [
        new WinstonDaily({
            level: 'info',
            datePattern: 'YYYY-MM-DD',
            dirname: logDir,
            filename: `%DATE%.log`,
            maxFiles: 30, // 30일치 로그 파일 저장
            zippedArchive: true,
        }),
        // error 레벨 로그를 저장할 파일 설정
        new WinstonDaily({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}/error`,
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
        new WinstonDaily({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: `${logDir}/debug`,
            filename: `%DATE%.debug.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),

        new winston.transports.Console({
            format: logFormat,
        }),
    ],
});

export default logger;
