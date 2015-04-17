# selenium-sessions

Get sesssions of selenium server with the [WebDriver Wire Protocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol).

---

### Example

```js
var Sessions = require(‘selenium-sessions’);
var Session = Sessions.Session;

var sessions = new Sessions({
  url: "http://localhost:4444/wd/hub"
});

sessions.all(function (err, data) {
  data.forEach(function (err, info){
    var session = new Session(info.id);
    session.get(function (err, info){
      session.del();
    });
  });
});
```
