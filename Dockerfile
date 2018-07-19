From node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./app.js /usr/src/app/app.js
COPY ./app.js.map /usr/src/app/app.js.map

EXPOSE 3000

CMD ["node", "app.js"]
