import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';
import resolvers from './graphql/resolvers';

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
