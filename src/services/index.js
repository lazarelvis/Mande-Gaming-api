const user = require('./user/user.service.js');
const games = require('./games/games.service.js');
const score = require('./score/score.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(games);
  app.configure(score);
}
