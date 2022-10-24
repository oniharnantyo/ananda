import { NextApiRequest, NextApiResponse } from 'next';

import { revoke } from '@services/auth/revoke';
import { deleteCookie, getCookie } from 'cookies-next';

const Logout = async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = getCookie('accessToken', { req, res });

  try {
    const resp = await revoke({
      accessToken: accessToken as string,
    });

    deleteCookie('accessToken', { req, res });
    deleteCookie('refreshToken', { req, res });

    res.status(200).send(resp);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default Logout;
