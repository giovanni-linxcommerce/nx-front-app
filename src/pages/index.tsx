import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    <h1>Checkout Client App</h1>
    <p>A ReactJS + Next.js structure.</p>
  </Container>
);

export default Home;
