import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { CreateArticle as TCreateArticle } from '@components/templates/Articles';

type CreateArticleProps = {
  accessToken: string;
};

const CreateArticle: NextPage<CreateArticleProps> = (props) => {
  return (
    <>
      <Head>Articles</Head>
      <TCreateArticle title="Create Article" accessToken={props.accessToken} />
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

export default CreateArticle;
