import { privateAxios } from 'src/lib/axios';

import { getArticlesProps } from './getArticles.types';

export const getArticles = async (
  {
    page = 1,
    perPage = 10,
    search = '',
    field = 'created_at',
    direction = 'DESC',
  }: getArticlesProps,
  accessToken: string
) => {
  try {
    const params = {
      page: page,
      perPage: perPage,
      search: search,
      field: field,
      direction: direction,
    };

    const endpoint = '/articles';
    const conf = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
      params: params,
    };

    const response = await privateAxios.get(endpoint, conf);

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
