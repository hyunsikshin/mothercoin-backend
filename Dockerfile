FROM node:11.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn && yarn global add prisma && prisma deploy && prisma generate

COPY . .

CMD yarn start

EXPOSE 4000