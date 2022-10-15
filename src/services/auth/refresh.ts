import { publicAxios } from '@lib/axios';

import { IRefreshProps } from './refresh.types';

const refresh = async (props: IRefreshProps) => {
  try {
    const endpoint = `/auth/refresh`;

    const conf = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const response = await publicAxios.post(endpoint, props, conf);

    const { data } = response;

    if (data.status == '00') {
      return response;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};

export default refresh;
