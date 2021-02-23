FROM node:12.2.0-alpine

USER root

WORKDIR /app

RUN /bin/sh -c "apk add --no-cache bash"

RUN npm i -g pm2 typescript


## Install client dependencies
WORKDIR /app/server/
COPY ./server/package*.json ./
RUN npm i

# Build server
COPY ./server .
COPY ./server/.env.example .env
RUN npm run build


## Install client dependencies
WORKDIR /app/client/
COPY ./client/package*.json ./
RUN npm i

# Build client
COPY ./client .
COPY ./client/.env.example .env
RUN npm run build
RUN mv ./build ../server/client
RUN cat .env


## Run app
WORKDIR /app/server/

# RUN ls -al

EXPOSE 4040

CMD ["pm2-runtime", "--name", "todov2",  "--NODE_ENV", "production", "--port", "4040", "build/app.js"]
