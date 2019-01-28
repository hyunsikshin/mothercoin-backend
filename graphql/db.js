import { prisma } from '../generated/prisma-client';

export const getUsers = () => data;

export const getUser = (domain, address, email, type) => {
  switch (type) {
    case 'domain':
      const resultD = data.filter(user => user.domain === domain);
      return resultD[0];
      break;

    case 'address':
      const resultP = data.filter(user => user.address === address);
      return resultP[0];
      break;

    case 'email':
      const resultE = data.filter(user => user.email === email);
      return resultE[0];
      break;

    default:
      return null;
      break;
  }
};

export const addUser = (address, domain, email) => {
  const newData = {
    id: `${data.length}`,
    address,
    domain,
    email,
  };
  data.push(newData);
  return newData;
};
