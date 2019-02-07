FROM node:11.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

CMD prisma deploy
CMD prisma generate

COPY . .

EXPOSE 4000

CMD yarn start