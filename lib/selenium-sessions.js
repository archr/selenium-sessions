var request = require('./request');
var Session = require('./session');

exports = module.exports = Sessions;

exports.Session = Session;

function Sessions(options) {
  options = options || {};

  this.url = options.url;

  request.baseUrl = this.url;
}

Sessions.prototype.all = function (callback) {
  return request.go('get', '/sessions', callback);
};

Sessions.prototype.status = function (callback) {
  return request.go('get', '/status', callback);
};

Sessions.prototype.get = function (sessionId, callback) {
  var session = new Session(sessionId, this.url);
  return session.get(callback);
};
