import type { AppProps } from 'next/app';

import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
