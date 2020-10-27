const baseUrl = 'http://localhost:8080/hello';

const get = async () => {
  return fetch(baseUrl, {
    headers: {
      // "content-type": "application/json",
      'Access-Control-Allow-Origin': 'true',
    },
    method: 'GET',
  });
};

export { get };
