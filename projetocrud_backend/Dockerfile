FROM node:16-alpine

WORKDIR /usr/api

COPY package*.json ./

RUN npm install

COPY ./dist .

EXPOSE 3000 

CMD ["node", "./dist/server.js"]