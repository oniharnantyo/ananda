import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { Articles as TArticles } from '@components/templates/Articles';

type ArticlesProps = {
  accessToken: string;
};

const Articles: NextPage<ArticlesProps> = (props) => {
  return (
    <>
      <Head>Articles</Head>
      <TArticles accessToken={props.accessToken} />
    </>
  );
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
