var Request = require('./request');
var Session = require('./session');

exports = module.exports = Sessions;

exports.Session = Session;

function Sessions(options) {
  options = options || {};

  this.url = options.url;
  this.request = new Request(this.url);
}

Sessions.prototype.all = function (callback) {
   return this.request.go('get', '/sessions', callback);
};

Sessions.prototype.status = function (callback) {
   return this.request.go('get', '/status', callback);
};

Sessions.prototype.get = function (sessionId, callback) {
  var session = new Session(sessionId, this.url);

  return session.get(callback);
};
