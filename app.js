var express = require('express');
 
var app = express();
// added more steps after setup completed 
app.get('/', function (req, res) {
  res.send('dev testing environment is up and running!!!');
  //res.send('hello world');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
