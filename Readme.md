## Образ Docker с простым мостом  WebSocket с MQTT для контроллера Wiren Board
Инструкция по установке  Docker на контроллер Wiren Board - https://wirenboard.com/wiki/Docker   

### Установка образа
docker pull bartwork/wirenboard_ws_mqtt_bridge   
docker run -p 8080:8080 --network="host" -d bartwork/wirenboard_ws_mqtt_bridge  

### Пример простой отправки сообщения в топик
```js
let message = JSON.stringify({ topic: "/devices/wb-mr6cu_43/controls/K1/on", message: "0" })   
ws.send(message)  
```
