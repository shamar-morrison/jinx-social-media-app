import type { NextPage } from 'next'
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { Rings } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { UserInterface } from 'utils/interfaces';
import Login from './login';

const Home = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserInterface | {}>({});

  useEffect(() => {
    const userInfo = {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };

    setUser(() => ({ ...userInfo }));
  }, [status]);

  if (status === 'loading') {
    return <Rings color="#00BFFF" height={120} width={120} />;
  }

  // redirect user to login page for sign in
  if (!session) {
    return <Login />;
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
