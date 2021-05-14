// Initializes the `score` service on path `/score`
const { Score } = require('./score.class');
const createModel = require('../../models/score.model');
const hooks = require('./score.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/score', new Score(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('score');

  service.hooks(hooks);
};
