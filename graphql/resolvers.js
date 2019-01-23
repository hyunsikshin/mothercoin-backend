import { getUsers, getUser, addUser } from './db';

const resolvers = {
  Query: {
    users: () => getUsers(), // 모든 정보 다 가져오기
    user: (_, { domain, pubkey, email, type }) =>
      getUser(domain, pubkey, email, type),
  },
  Mutation: {
    addUser: (_, { pubkey, domain, email }) => addUser(pubkey, domain, email),
  },
};

export default resolvers;
