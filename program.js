var http = require('http');
var bl = require('bl');


http.get("http://www.google.com/index.html", function(response) {
    response.setEncoding('utf8');
    response.on("data", console.log)
    response.on("error",console.error)
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  })