import { GetServerSidePropsContext } from 'next';

export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    req: { cookies },
  } = context;

  const { accessToken } = cookies;
  const isAuthorized = accessToken !== undefined;
  return {
    props: {
      isAuthorized,
    },
  };
}
