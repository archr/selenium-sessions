var superagent = require('superagent');

exports.baseUrl = 'http://localhost:444/wd/hub';

exports.go = function (method, path, callback) {
  var url = exports.baseUrl + path;
  var agent = superagent.agent();

  return agent[method](url)
    .end(callback);
};
