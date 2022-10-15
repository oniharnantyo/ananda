import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

export const instance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const originalConfig = error.config;

    if (error?.response?.status === 401 && !originalConfig?._retry) {
      try {
        originalConfig._retry = true;
        const response = await fetch('/api/auth/refresh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          Promise.reject();
          throw new Error('Error on refresh auth');
        }

        const responseJson = await response.json();

        const accessToken = responseJson?.data?.accessToken;

        if (accessToken) {
          originalConfig.headers = {
            ...originalConfig.headers,
            authorization: `Bearer ${accessToken}`,
          };
        }

        return instance(originalConfig);
      } catch (error: unknown) {
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
