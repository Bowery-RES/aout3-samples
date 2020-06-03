const _ = require('lodash');

const verifyPasswordCurried = _.curry((rules, configFn, input) => {
  const failed = rules
    .map(rule => rule(input))
    .filter(result => result === false);

  if (failed.length === 0) {
    configFn().logger.info('PASSED'); // <- api chain
    return true;
  }
  configFn().logger.info('FAIL'); // <- api chain
  return false;
});

module.exports = {
  verifyPasswordCurried
};