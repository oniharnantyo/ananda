import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

import { getArticles } from '@services/articles/getArticles';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

type ArticlesProps = {
  accessToken: string;
};

const Articles: NextPage<ArticlesProps> = (props) => {
  const router = useRouter();

  const {
    data: articles,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticles'], () => getArticles({ page: 1, perPage: 9 }, props?.accessToken), {
    retry: false,
  });

  useEffect(() => {
    if (articles) {
      console.log(articles.data);
    }
  });

  if (error) {
    router.push('/auth/login');
  }

  return <h1 className="text-3xl font-bold underline">Articles</h1>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    req: { cookies },
  } = context;

  const { accessToken } = cookies;

  return {
    props: {
      accessToken: accessToken || '',
    },
  };
}

export default Articles;
