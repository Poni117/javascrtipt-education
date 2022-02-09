import WebSocket from 'ws';
import os from 'os';

const host = os.hostname();

const client = new WebSocket(`ws://${host}:8080`);

client.on('open', function open() {
    client.send('Hi Server');
});

client.on('message', function message(data) {
  console.log('Server: %s', data);
});