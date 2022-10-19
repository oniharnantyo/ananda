import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { UpdateArticle as TUpdateArticle } from '@components/templates/Articles';

type UpdateArticleProps = {
  accessToken: string;
};

const UpdateArticle: NextPage<UpdateArticleProps> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>Articles</Head>
      <TUpdateArticle title="Update Article" id={id as string} accessToken={props.accessToken} />
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

export default UpdateArticle;
