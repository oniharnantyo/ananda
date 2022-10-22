import { privateAxios } from '@lib/axios';

import { createFreebookProps } from './createFreebook.types';

export const createFreebook = async (
  { title, author, description, image, imageDescription, url }: createFreebookProps,
  accessToken: string
) => {
  try {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('imageDescription', imageDescription);
    formData.append('url', url);

    const endpoint = '/freebooks';
    const conf = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };

    const response = await privateAxios.post(endpoint, formData, conf);

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
