import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { CreateEvent as TCreateEvent } from '@components/templates/Events';

type CreateEventProps = {
  accessToken: string;
};

const CreateEvent: NextPage<CreateEventProps> = (props) => {
  return (
    <>
      <Head>Events</Head>
      <TCreateEvent title="Create Event" accessToken={props.accessToken} />
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

export default CreateEvent;
