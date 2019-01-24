import { getUsers, getUser, addUser } from './db';

const resolvers = {
  Query: {
    users: () => getUsers(), // 모든 정보 다 가져오기
    user: (_, { domain, address, email, type }) =>
      getUser(domain, address, email, type),
  },
  Mutation: {
    addUser: (_, { address, domain, email }) => addUser(address, domain, email),
  },
};

export default resolvers;
