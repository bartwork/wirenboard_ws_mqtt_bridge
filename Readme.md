## Образ Docker с простым мостом  WebSocket с MQTT для контроллера Wiren Board
Инструкция по установке  Docker на контроллер Wiren Board - https://wirenboard.com/wiki/Docker   

### Установка образа
docker pull bartwork/wirenboard_ws_mqtt_bridge   
docker run -p 8080:8080 --network="host" -d bartwork/wirenboard_ws_mqtt_bridge  

### Простой пример отправки сообщения в топик
```js
const ws = new WebSocket("ws://192.168.1.100:8080")   
let message = { topic: "/devices/wb-mr6cu_43/controls/K1/on", message: "0" } 
ws.send(JSON.stringify(message))  
```
