import { getAll, getDomain, getKey, addData } from './db';

const resolvers = {
  Query: {
    mother: () => getAll(), // 모든 정보 다 가져오기
    domain: (_, { domain }) => getDomain(domain), // 도메인을 통해 있는지 없는지 확인
    verify: (_, { pubkey }) => getKey(pubkey), //pubkey를 보내 가지고있는지 확인
  },
  Mutation: {
    addDomain: (_, { pubkey, domain, email }) => addData(pubkey, domain, email),
  },
};

export default resolvers;
