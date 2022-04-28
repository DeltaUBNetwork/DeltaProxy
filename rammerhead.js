var http = require('http');
var https = require('https')
var server = http.Server();

server.on("request", (req, res) => {
  var url = new URL('https://r.school-do-sus-things.oklolnojoe39.repl.co/.info/newsession')
  url.remoteAddress = req.headers['x-forwarded-for']
  https.request(url, {method: 'GET', headers: {}}, (response) => {
    var chunks = []
    response.on('data', chunk => chunks.push(chunk)).on('end', () => {
      res.end(Buffer.concat(chunks).toString())
    })
  }).end()
});

server.listen(8443, console.log('Ludicrous Rammerhead Running at http://localhost:'+(8443)));