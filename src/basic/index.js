'use strict';

const app = require('express')();

/**
 * Run the application process.
 *
 * @returns {void}
 */
const run = async () => {
  require('./src/init/setup').setupApp(app);
  require('./src/init/routes').setupRoutes(app);

  app.listen(+process.env.PORT, () => {
    logger.info(`${applicationName} listening on port ${+process.env.PORT}.`);
  });
};

// allow for testing hooks before starting the process straightaway
process.nextTick(run);

module.exports = {
  run
};
