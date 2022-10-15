import { publicAxios } from '@lib/axios';

import { IAuthProps } from './auth.types';

export const auth = async (props: IAuthProps) => {
  try {
    const endpoint = `/auth`;

    const conf = {
      headers: { 'Content-Type': 'application/json' },
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
