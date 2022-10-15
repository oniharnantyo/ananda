import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

export const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(function (config) {
    return config;
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
