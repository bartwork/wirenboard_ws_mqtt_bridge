const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({port: 8080})
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://192.168.1.100')

wss.on("connection", ws => {
    ws.send('Welcome, you are connected!');
    ws.on('message', (data) => {
        let message;
        try {
            message = JSON.parse(data);
            client.publish(message.topic, message.message)
        } catch (e) {
            return;
        }
    });
})
