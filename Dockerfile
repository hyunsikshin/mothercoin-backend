FROM node:11.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 4000

CMD prisma deploy
CMD prisma generate
CMD yarn start