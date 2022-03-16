import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import Sidebar from 'components/Sidebar';
import UserProfile from 'components/UserProfile';
import Pins from 'pages/pins';
import { client } from 'client';
import { userQuery } from 'utils/data';
import { SanityDoc } from 'utils/interfaces';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState<SanityDoc>();
  const scrollRef = useRef<HTMLDivElement>(null);

  const userInfo = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo._id);

    client.fetch(query).then(data => setUser(data[0]));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Jinx - Social Media App</title>
        <meta name="description" content="Social Media App built by Shamar Morrison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-in-out">
        <div className="hidden md:flex h-screen flex-initial">
          <Sidebar person={user || null} />
        </div>
        <div className="flex md:hidden flex-row">
          <div className="p-2 w-full flex flex-row justify-between shadow-md">
            <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
            <Link href={'/'}>
              <img src={'/logo.png'} alt="logo" className="w-28" />
            </Link>
            <Link href={`user-profile/${user?._id}`}>
              <img src={user?.image || '/default_user.jpg'} alt="profile picture" />
            </Link>
          </div>
          {toggleSidebar && (
            <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
              <div className="absolute w-full flex justify-end items-center p-2">
                <AiFillCloseCircle
                  fontSize={30}
                  className={'cursor-pointer'}
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
              <Sidebar person={user || null} closeToggle={setToggleSidebar} />
            </div>
          )}
        </div>
        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
          <Routes>
            <Route path="/user-profile/:userId" element={<UserProfile />} />
            <Route path="/*" element={<Pins person={user || null} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
