import { privateAxios } from '@lib/axios';

export const getEvent = async (id: string, accessToken: string) => {
  try {
    const endpoint = `/events/${id}`;
    const conf = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };

    const response = await privateAxios.get(endpoint, conf);

    const { data } = response;

    if (data.status == '00') {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
