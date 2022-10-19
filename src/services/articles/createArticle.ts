import { privateAxios } from '@lib/axios';

import { createArticleProps } from './createArticle.types';

export const createArticle = async (
  { title, author, description, image, imageDescription, content }: createArticleProps,
  accessToken: string
) => {
  try {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('imageDescription', imageDescription);
    formData.append('content', content);

    const endpoint = '/articles';
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
