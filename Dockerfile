FROM node:11.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

CMD yarn start

EXPOSE 4000