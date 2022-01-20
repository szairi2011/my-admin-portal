# Create an image containng the right node, npm,
# and Angular CLI versions as a custom base image
##### Stage-1: build the Angular app for production
FROM alpine:3.15 AS node10-builder

ENV NODE_VERSION 10.13.0

RUN apk update && apk add \
      vim \
      curl

# Install latest nvm -- Use curl as we can't run yum command on cloud FISDEV VM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# Then use nvm to install a specific version of nodejs
RUN nvm install ${NODE_VERSION}

WORKDIR /app
COPY package.json package-lock.json ./
# Install Angular npm dependencies on the image
RUN npm install

# Copy the Angular project artifacts to be able to build;
# the unncessary content will not be included in the runtime later
COPY . .
# Create the build /dist artifacts inside the image
RUN ng build -- --prod

##### Stage-2: deploy only the build to nginx http server; keeping a concise runtime container no node or npm or ng cli or sdk node modules ...
FROM nginx:alpine

#ENV NODE_ENV=production
# Volume can either be cretaed by docker-compose or when running docker run -v /usr/share/nginx/html ... command
#VOLUME /usr/share/nginx/html

# Keeping the runtime container size as small as possible
COPY --from=node10-builder /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
