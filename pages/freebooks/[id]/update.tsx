import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { UpdateFreebook as TUpdateFreebook } from '@components/templates/Freebooks';

type UpdateFreebookProps = {
  accessToken: string;
};

const UpdateFreebook: NextPage<UpdateFreebookProps> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>Freebooks</Head>
      <TUpdateFreebook title="Update Freebook" id={id as string} accessToken={props.accessToken} />
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

export default UpdateFreebook;
