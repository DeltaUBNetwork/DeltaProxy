import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';
import express from 'express'


const server = http.createServer();
const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('public/');


server.on('request', async (request, response) => {
  try{
    if (bare.route_request(request, response)) return true;
    serve.serve(request, response);
  }catch(err){
    console.log(err)
  }
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});

server.listen(80);
