import { WebSocketServer } from "ws";

const server = new WebSocketServer({port: 8080});

server.on('connection', (clientSocket) => {

    clientSocket.on('message', (data) => {
        console.log('Client: %s', data);

        clientSocket.send('Hi Client');
    })
});
