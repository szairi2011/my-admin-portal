# Create an image containng the right node, npm,
# and Angular CLI versions as a custom base image
FROM alpine:3.15 AS node10-builder

ENV NODE_VERSION 10.13.0
ENV NPM_VERSION 6.4.1

RUN apt

FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
