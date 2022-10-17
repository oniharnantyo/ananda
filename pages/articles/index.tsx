import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { ArticleTable } from '@components/organisms/Table';
import { StyledLayout } from '@components/templates/Layout';

type ArticlesProps = {
  accessToken: string;
};

const Articles: NextPage<ArticlesProps> = (props) => {
  return (
    <>
      <Head>Articles</Head>
      <StyledLayout>
        <ArticleTable accessToken={props.accessToken} />
      </StyledLayout>
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
