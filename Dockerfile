FROM arm32v7/node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
COPY index.js .
EXPOSE 8080 8090
CMD [ "node", "index.js" ]
