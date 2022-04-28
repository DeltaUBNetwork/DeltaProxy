import Server from 'bare-server-node';
import http from 'http';
import mime from 'mime'
import fetch from "node-fetch";
import fs from 'fs';
import { readFileSync } from 'fs'
//import('./rammerhead.js')
var defaults = {
  indexfile: true,
  '404': null,
  '403': null,
  'index': null
}
function Serve(path, config, cors) {
  var config = Object.assign(defaults, config)
  return function(req, res, cors) {
    var type = mime.getType(req.url.split('?')[0].split('#')[0])||'text/html'
    if (req) {
      var url = path+req.url.split('?')[0].split('#')[0]
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {url+='index.html'}
      try {readFileSync(url)} catch {/*if (config['404']) return config['404'](req, res)*/;return res.end('Not Found')}
      if (req.url.split('?')[0].split('#')[0]=='/'&&config.indexfile==true) {if (config.index) return config.index(req, res, readFileSync(url), type)}
      return res.writeHead(200, {'content-type':type, 'access-control-allow-origin':cors?'*':request.headers['host']}).end(readFileSync(url))
    } else {
      throw new Error('Request Object: Expected [object Request], got undefined')
    }
  }
}

const bare =  new Server('/bare/', '');
var server = http.createServer();  

  var Rhodium = await import('Rhodium');
  Rhodium = new Rhodium.default({server: server, prefix: '/client/',encode: 'plain', wss: true, uv: [true, {}]})
var config = {"bot":true,"game":false,"cookie":true,"primaryProxy":"ultraviolet","googleBlock":true,"cors":true,"rammerhead":true,"emulator":false,"config":{"port":443,"gamePort":443}}

const handler = {
    '404': function(req, res) {
      console.log(req.url)
    },
    '403': function(req, res) {
      
    },
    'index': function(req, res, data, type) {
      function Configuration(str) {
        return str.replace('data-options=""', 'data-options='+JSON.stringify(config)+'').replace('${location.origin}', 'https://'+req.headers['host'])
      }
      res.writeHead(200, {'content-type':type}).end(Configuration(data.toString()))
    },
    indexfile: true
  }
  const serve = Serve('./public', handler)
  

  




server.on('request', (request, response) => {
    if (request.url.startsWith('/sw/')) return response.writeHead(200, {'content-type': 'text/html'}).end('<script>location.reload()</script>');
    if (bare.route_request(request, response)) return true;
        if (request.url.startsWith('/client/')) {response.writeHead = new Proxy(response.writeHead, {apply(t, g, a) {if (a[1] && config.cors) a[1]['access-control-allow-origin'] = '*';return Reflect.apply(t, g, a)}});return Rhodium.request(request, response)}
if (request.headers['cookie']) {
          request.cookie = {}
          var a = (request.headers['cookie'].split('; ').map(e => {
            var name = e.split('=')[0],value=e.split('=')[1]
            request.cookie[name] = value
            return `${name}=${value}`
          }).join('; '))
          if (!request.cookie['ld-auth-setter']) if (request.url.startsWith('/client/')||request.url.startsWith('/service/')) return response.writeHead(403).end(fs.readFileSync('./public/401.html'))
        }
        if(request.headers.useragent === 'googlebot')return response.writeHead(403).end('');

   
   

    serve(request, response,true);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

Rhodium.init()

  const port = 443
  
  server.listen(port, console.log('http://localhost:'+port));