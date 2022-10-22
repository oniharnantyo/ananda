import { privateAxios } from '@lib/axios';

import { updateFreebookProps } from './updateFreebook.types';

export const updateFreebook = async (
  id: string,
  { title, author, description, image, imageDescription, url }: updateFreebookProps,
  accessToken: string
) => {
  try {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }
    formData.append('imageDescription', imageDescription);
    formData.append('url', url);

    const endpoint = `/freebooks/${id}`;
    const conf = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    };

    const response = await privateAxios.put(endpoint, formData, conf);

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
