const winston = require('winston')
const chalk = require('chalk')

function anotherlog(name, options = {}) {
    if (!name) throw new Error('Logger must have a name!')

    const logger = new winston.Logger({
      transports: [
        new winston.transports.Console({
          level: options.level || (process.env.NODE_ENV === 'production') ? 'info' : 'debug',
          json: options.json || (process.env.NODE_ENV === 'production'),
          stringify: options.stringify || (process.env.NODE_ENV === 'production'),
          label: name,
          formatter: (process.env.NODE_ENV === 'production') ? undefined : consoleFormatter,
          handleExceptions: true,
          humanReadableUnhandledException: options.humanReadableUnhandledException || (process.env.NODE_ENV === 'production'),
        })
      ],
      exitOnError: false,
    })
    logger.intercept = intercept.bind(logger)
    if (process.env.NODE_ENV === 'development') {
      logger.warn('!! Running in development mode !!'.toUpperCase())
    }
    return logger
}

function consoleFormatter(options) {
  const now = new Date()
  const ts = chalk.dim(now.toISOString())
  const label = chalk.white(options.label)
  const level = formatLevel(options.level)
  const meta = (options.meta && Object.keys(options.meta).length)
    ? `\n-> ${chalk.cyan(JSON.stringify(options.meta, null, 2))}`
    : ''
  return `${ts} (${label}) [${level}] - ${chalk.inverse(options.message)}${meta}`
}

function formatLevel(level) {
  const str = `${level.toUpperCase()}`
  switch(level) {
    case 'silly':
      return chalk.blue(str)
    case 'debug':
      return chalk.white.magenta(str)
    case 'verbose':
      return chalk.cyan(str)
    case 'info':
      return chalk.green(str)
    case 'warn':
      return chalk.yellow(str)
    case 'error':
      return chalk.red(str)
  }
}

function intercept(params) {
  this.debug('intercept', params)
  return params
}

module.exports = anotherlog
