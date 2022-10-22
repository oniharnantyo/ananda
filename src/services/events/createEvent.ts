import { privateAxios } from '@lib/axios';

import { createEventProps } from './createEvent.types';

export const createEvent = async (
  { title, location, startAt, image, imageDescription, content }: createEventProps,
  accessToken: string
) => {
  try {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('location', location);
    formData.append('startAt', startAt.toISOString());
    formData.append('image', image);
    formData.append('imageDescription', imageDescription);
    formData.append('content', content);

    const endpoint = '/events';
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
