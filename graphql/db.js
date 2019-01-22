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

export const getAll = () => data;

export const getDomain = domain => {
  const result = data.filter(user => user.domain === domain);
  return result[0];
};

export const getKey = pubkey => {
  const result = data.filter(user => user.pubkey === pubkey);
  return result[0];
};

export const addData = (pubkey, domain, email) => {
  const newData = {
    id: `${data.length}`,
    pubkey,
    domain,
    email,
  };
  data.push(newData);
  return newData;
};
