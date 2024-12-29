import React from 'react';
import Layout from '../layout/Layout';
import Hero from '../home/Hero';
import About from '../home/About';
import Features from '../home/Features';
import Team from '../home/Team';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Team />
    </Layout>
  );
}

export default Home;