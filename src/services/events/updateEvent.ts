import { privateAxios } from '@lib/axios';

import { updateEventProps } from './updateEvent.types';

export const updateEvent = async (
  id: string,
  { title, location, startAt, image, imageDescription, content }: updateEventProps,
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

    const endpoint = `/events/${id}`;
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
