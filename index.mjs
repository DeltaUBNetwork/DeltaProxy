import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';

const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');
const lightspeedserve = new nodeStatic.Server('mathhelp/');
const server = http.createServer();

server.on('request', (request, response) => {
    const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  var isLS = ip.startsWith('34.216.110') || ip.startsWith('54.244.51') || ip.startsWith('54.172.60') || ip.startsWith('34.203.250') || ip.startsWith('34.203.254');

     if (isLS){
    lightspeedserve.serve(request, response);
     }
  else {
    if (bare.route_request(request, response))
      return true;
  
    serve.serve(request, response);
  }
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

server.listen(443);