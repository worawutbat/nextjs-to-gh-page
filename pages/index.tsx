import React from 'react';
import Head from 'next/head';

import HomePage from '~/page/Home';

const Home = () => {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
