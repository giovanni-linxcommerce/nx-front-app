import React from 'react';
import Head from 'next/head';

import { Container } from '@/styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    <h1>NX DS Front-end playground</h1>
    <p>A ReactJS + Next.js static structure.</p>
  </Container>
);

export default Home;
