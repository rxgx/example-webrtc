// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Peer from 'peerjs';

// Create a new Peer server
const peerServer = Peer.PeerServer({
  port: 9000, // Port to listen on
  path: '/myapp' // Path for peerjs server
});

// When a client connects to the server, log a message
peerServer.on('connection', (client) => {
  console.log(`${client.id} connected to the server`);
});

// Export the server as a NextJS serverless function
export default function handler (req, res) {
  return peerServer(req, res);
};
