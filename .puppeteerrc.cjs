const {join} = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Skip downloading Chrome during npm install
  skipDownload: true,
  // Use system Chrome in production
  executablePath: process.env.NODE_ENV === 'production' ? '/usr/bin/google-chrome' : undefined,
};