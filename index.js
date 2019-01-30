import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import resolvers from './graphql/resolvers';

// REST API REST API REST API REST API REST API  시작
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/user/domain/:domain', async (req, res) => {
  const { domain } = req.params;
  const post = await prisma.user({ domain });
  res.json(post);
});

app.listen(3000, () => console.log('rest Server is running'));
// REST API REST API REST API REST API REST API 끝

const server = new GraphQLServer({
  typeDefs: './graphql/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => {
  console.log('server is running');
});
