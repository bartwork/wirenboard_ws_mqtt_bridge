# Docker image with bridge WebSocket to MQTT for WirenBoard controller
docker pull bartwork/wirenboard_ws_mqtt_bridge   
docker run -p 8080:8080 --network="host" -d bartwork/wirenboard_ws_mqtt_bridge   
