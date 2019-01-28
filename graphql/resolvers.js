import { prisma } from '../generated/prisma-client';

const resolvers = {
  Query: {
    users(root, args, context) {
      return context.prisma.users();
    },
    user(root, args, context) {
      switch (args.type) {
        case 'domain':
          return context.prisma.user({ domain: args.domain });
        case 'address':
          return context.prisma.user({ address: args.address });
        case 'email':
          return context.prisma.user({ address: args.email });
        default:
          return null;
      }
    },
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
        domain: args.domain,
        email: args.email,
        address: args.address,
      });
    },
  },
};

export default resolvers;
