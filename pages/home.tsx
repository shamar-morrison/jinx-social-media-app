import React from 'react';
import Head from 'next/head';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="text-3xl font-bold underline">
      <Head>
        <title>Jinx - Social Media App</title>
        <meta name="description" content="Social Media App built by Shamar Morrison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Help me ples</h2>
    </div>
  );
};

export default Home;
