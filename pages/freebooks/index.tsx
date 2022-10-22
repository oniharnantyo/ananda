import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { Freebooks as TFreebooks } from '@components/templates/Freebooks';

type FreebooksProps = {
  accessToken: string;
};

const Freebooks: NextPage<FreebooksProps> = (props) => {
  return (
    <>
      <Head>Freebooks</Head>
      <TFreebooks accessToken={props.accessToken} />
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

export default Freebooks;
