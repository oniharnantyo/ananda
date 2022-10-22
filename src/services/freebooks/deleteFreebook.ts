import { privateAxios } from '@lib/axios';

export const deleteFreebook = async (id: string, accessToken: string) => {
  try {
    const endpoint = `/freebooks/${id}`;
    const conf = {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };

    const response = await privateAxios.delete(endpoint, conf);

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
