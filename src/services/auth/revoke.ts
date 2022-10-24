import { publicAxios } from '@lib/axios';

import { IRevokeProps } from './revoke.types';

export const revoke = async (props: IRevokeProps) => {
  try {
    const endpoint = `/auth/revoke`;
    const conf = {
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await publicAxios.post(endpoint, props, conf);

    const { data } = response;

    if (data.status == '00') {
      return null;
    } else {
      throw new Error(data.message);
    }
  } catch (error: unknown) {
    throw error;
  }
};
