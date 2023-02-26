const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({port: 8080})
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://127.0.0.1:1883')

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
