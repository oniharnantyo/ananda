import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import { Events as TEvents } from '@components/templates/Events';

type EventsProps = {
  accessToken: string;
};

const Events: NextPage<EventsProps> = (props) => {
  return (
    <>
      <Head>Events</Head>
      <TEvents accessToken={props.accessToken} />
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

export default Events;
