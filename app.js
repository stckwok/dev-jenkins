var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  //res.send('dev testing environment is up and running!!!');
  res.send('hello world');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
