import Config from 'react-native-config';
import Utils from './';
import DeviceStorage from '../utils/deviceStorage';

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
  console.log(`request is ${url}`);
  const config = {
    ...options,
  };
  const errors = [];

  if (!url) {
    errors.push('url');
  }
  if (!config.payload && (config.method && config.method.toUpperCase() !== 'GET' && config.method !== 'delete')) {
    errors.push('payload');
  }
  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    ...config.headers,
  };

  const params = {
    headers,
    method: config.method,
  };

  if (params.method !== 'GET' && config.payload) {
    params.body = Utils.jsonToQueryString(config.payload);
  }

  const api = `${host}${url}`;

  return DeviceStorage.get('authtokenq').then(authtokenq => {
    params.headers.authtokenq = authtokenq;
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
        } else {
          return response.json();
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
}