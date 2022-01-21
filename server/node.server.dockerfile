FROM node:alpine
COPY ./database.json /opt/database.json
RUN npm install -g json-server
EXPOSE 3000
#CMD ["json-server", "--watch", "-H", "0.0.0.0", "/opt/database.json"]
ENTRYPOINT ["json-server", "--watch", "-H", "0.0.0.0", "/opt/database.json"]

# docker build -t soulou2019/node-server -f node.server.dockerfile
# docker run -d -p 3000:3000 --name soulou2000/node-server node-server
