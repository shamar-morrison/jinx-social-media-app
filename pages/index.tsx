import type { NextPage } from 'next'
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  if (status === 'loading') {
    return <Rings color="#00BFFF" height={120} width={120} />;
  }

  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <div className="text-3xl font-bold underline">
      <Head>
        <title>Jinx - Social Media App</title>
        <meta name="description" content="Social Media App built by Shamar Morrison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Help</h2>
    </div>
  );
};

export default Home
