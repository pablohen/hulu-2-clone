import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
