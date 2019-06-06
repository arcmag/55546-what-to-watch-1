import axios from 'axios';

const timeout = 5000;
const baseURL = `https://es31-server.appspot.com/wtw`;

const STATUS_ERROR = 403;

export const createAPI = (callback) => {
  const api = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === STATUS_ERROR) {
      callback();
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
