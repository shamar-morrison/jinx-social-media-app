import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { Rings } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { UserInterface } from 'utils/interfaces';
import Login from './login';
import { client } from 'client';
import Home from 'pages/home';

const Index = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    const userInfo: UserInterface = {
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };

    setUser(() => userInfo);
  }, [status]);

  if (user?.name && user.email) {
    const doc = {
      _id: user.name.toLowerCase().trim().split(' ')[0],
      _type: 'user',
      userName: user?.name,
      image: user?.image,
    };

    client
      .createIfNotExists(doc)
      .then(res => console.log(res, 'res'))
      .catch(er => console.error(er));
  }

  if (status === 'loading') {
    return <Rings color="#00BFFF" height={120} width={120} />;
  }

  // redirect user to login page for sign in
  if (!session) {
    return <Login />;
  }

  return <Home />;
};

export default Index;
