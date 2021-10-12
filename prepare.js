/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const isCi = process.env.CI !== undefined;

if (!isCi) {
  require('husky').install();
}
