## Docker image with simple bridge WebSocket to MQTT for Wiren Board controller
Инструкция по установки  Docker на контроллер Wiren Board https://wirenboard.com/wiki/Docker   

### Установка образа
docker pull bartwork/wirenboard_ws_mqtt_bridge   
docker run -p 8080:8080 --network="host" -d bartwork/wirenboard_ws_mqtt_bridge  

