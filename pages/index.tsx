import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/events');
  });

  return <></>;
};

export default Home;
