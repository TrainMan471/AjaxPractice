let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  const myReadStream = fs.createReadStream(__dirname + '/index.html/', 'utf8');
  myReadStream.pipe(res);//shoving the above line of code into the variable 'res';

});

server.listen(3000, '127.0.0.1');
console.log("Success");
