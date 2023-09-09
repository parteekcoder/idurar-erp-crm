const { createLogger, format, transports } = require('winston');
const config = require('../config/config.js');
const httpTransportOptions = {
    host: 'http-intake.logs.us3.datadoghq.com',
    path: `/api/v2/logs?dd-api-key=${config.datadog.apiKey}`,
    ssl: true
};


const logger = createLogger({
    exitOnError: true,
    format: format.json(),
    transports: [
      new transports.Http(httpTransportOptions),
    ],
});

module.exports = {
    logger
};