var request = require('./request');

exports = module.exports = Session;

function Session (id) {
  this.id = id;
}

Session.prototype.path = function (complement) {
  complement = complement ? '/' + complement : '';

  return '/session' + this.id + complement;
};

Session.prototype.get = function (callback) {
  var path = this.path();
  return reques.go('get', path, callback);
};

Session.prototype.delete = function (callback) {
  var path = this.path();
  return request.go('delete', path, callback);
};

