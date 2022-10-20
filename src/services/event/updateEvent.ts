import { privateAxios } from '@lib/axios';

import { updateArticleProps } from './updateEvent.types';

export const updateArticle = async (
  id: string,
  { title, location, startAt, image, imageDescription, content }: updateArticleProps,
  accessToken: string
) => {
  try {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('location', location);
    formData.append('startAt', startAt.toISOString());
    if (image) {
      formData.append('image', image);
    }
    formData.append('imageDescription', imageDescription);
    formData.append('content', content);

    const endpoint = `/articles/${id}`;
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
