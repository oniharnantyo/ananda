import { NextApiRequest, NextApiResponse } from 'next';

import { IAuth } from '@domains/auth';
import { auth } from '@services/auth/auth';
import * as cookie from 'cookie';

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;

  try {
    const { data } = await auth({
      email: body?.email,
      password: body?.password,
    });

    const _data = data.data as IAuth;

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

    res.status(200).send(data);
  } catch ({ response: { status, data } }) {
    res.status(status as number).json(data);
  }
};

export default Login;
