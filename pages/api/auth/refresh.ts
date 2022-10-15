import { NextApiRequest, NextApiResponse } from 'next';

import { IAuth } from '@domains/Auth';
import refresh from '@services/auth/refresh';
import * as cookie from 'cookie';
import { getCookie } from 'cookies-next';

const Refresh = async (req: NextApiRequest, res: NextApiResponse) => {
  const refreshToken = getCookie('refreshToken', { req, res });

  if (!refreshToken) {
    res.status(500);
  }

  try {
    const { data, headers: returnedHeaders } = await refresh({
      refreshToken: refreshToken as string,
    });

    const _data = data.data as IAuth;

    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1] as string)
    );

    res.setHeader('set-cookie', [
      cookie.serialize('accessToken', _data.accessToken, {
        expires: new Date(_data.expiresAt),
        httpOnly: true,
        path: '/',
      }),
      cookie.serialize('refreshToken', _data.refreshToken, {
        expires: new Date(_data.refreshExpiresAt),
        httpOnly: true,
        path: '/',
      }),
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default Refresh;
