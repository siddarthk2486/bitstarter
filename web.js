var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());
var msg=fs.readFileSync ('index.html','utf8');
app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
