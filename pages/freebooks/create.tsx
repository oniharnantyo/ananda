import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { CreateFreebook as TCreateFreebook } from '@components/templates/Freebooks';

type CreateFreebookProps = {
  accessToken: string;
};

const CreateFreebook: NextPage<CreateFreebookProps> = (props) => {
  return (
    <>
      <Head>Freebooks</Head>
      <TCreateFreebook title="Create Freebook" accessToken={props.accessToken} />
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

export default CreateFreebook;
