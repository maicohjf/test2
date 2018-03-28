import Config from 'react-native-config';

const host = Config.API_URL;

export class ServerError extends Error {
  constructor(response, ...params) {
    super(...params);

    Error.captureStackTrace(this, ServerError);

    this.name = 'ServerError';
    this.response = {};

    return this;
  }
}

export function parseError(error) {
  return error || 'Something went wrong';
}

export function request(url, options) {
  const config = {
    ...options,
  };
  const errors = [];

  if (!url) {
    errors.push('url');
  }

  if (!config.payload && (config.method !== 'GET' && config.method !== 'DELETE')) {
    errors.push('payload');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }

  const headers = {
    'Content-Type': 'x-www-form-urlencoded',
    ...config.headers,
  };

  const params = {
    headers,
    method: config.method,
  };

  if (params.method !== 'GET') {
    params.body = JSON.stringify(config.payload);
  }

  const api = `${host}${url}`;
  console.log(api);
  console.log(params);
  return fetch(api, params)
  .then(async (response) => {
    console.log(response);
    if (response.status > 299) {
      const error = new ServerError(response.statusText);
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('x-www-form-urlencoded')) {
        error.response = {
          status: response.status,
          data: await response.json(),
        };
      }
      else {
        error.response = {
          status: response.status,
          data: await response.text(),
        };
      }

      throw error;
    }
    else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('x-www-form-urlencoded')) {
        return response.json();
      }

      return response.text();
    }
  })
  .catch(err => {
    console.log(err);
  });
}