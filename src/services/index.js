const games = require('./games/games.service.js');
const score = require('./score/score.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(games);
  app.configure(score);
  app.configure(users);
}
