import chalk from 'chalk';

// Map log levels to their respective colors
const levels = {
  info: chalk.cyan,
  warn: chalk.yellow,
  error: chalk.red,
  debug: chalk.grey,
  verbose: chalk.magenta,
};

// Generic log function
function log(level, message) {
  const color = levels[level] || ((msg) => msg);
  console.log(color(`[${level.toUpperCase()}] ${message}`));
}

// Export specific functions for each log level
export const info = (msg) => log('info', msg);
export const warn = (msg) => log('warn', msg);
export const error = (msg) => log('error', msg);
export const debug = (msg) => log('debug', msg);
export const verbose = (msg) => log('verbose', msg);
