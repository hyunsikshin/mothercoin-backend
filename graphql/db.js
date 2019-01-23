let data = [
  {
    id: 0,
    pubkey: 'gustlrwkdwkd',
    domain: 'hyunsik',
    email: 'hyunsik@gmail.com',
  },
  {
    id: 1,
    pubkey: 'gustlr',
    domain: 'xnxic',
    email: 'xnxic@gmail.com',
  },
  {
    id: 2,
    pubkey: 'gustlrtlr',
    domain: 'xnxic',
    email: 'xnxic@gmail.com',
  },
];

export const getUsers = () => data;

export const getUser = (domain, pubkey, email, type) => {
  switch (type) {
    case 'domain':
      const resultD = data.filter(user => user.domain === domain);
      return resultD[0];
      break;

    case 'pubkey':
      const resultP = data.filter(user => user.pubkey === pubkey);
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

export const addUser = (pubkey, domain, email) => {
  const newData = {
    id: `${data.length}`,
    pubkey,
    domain,
    email,
  };
  data.push(newData);
  return newData;
};
