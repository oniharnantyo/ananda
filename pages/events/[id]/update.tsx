import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { UpdateEvent as TUpdateEvent } from '@components/templates/Events';

type UpdateEventProps = {
  accessToken: string;
};

const UpdateEvent: NextPage<UpdateEventProps> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>Events</Head>
      <TUpdateEvent title="Update Event" id={id as string} accessToken={props.accessToken} />
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

export default UpdateEvent;
