import { Props } from 'components/Sidebar';
import React, { useState } from 'react';
import Navbar from 'components/Navbar';
import Feed from 'components/Feed';
import PinDetails from 'pages/pindetails';
import { Route, Routes } from 'react-router-dom';
import CreatePin from './createpin';
import Search from 'pages/Search';

const Pins = ({ person }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="px-2 md:px-5">
      <div className=" bg-gray-50">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full ">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/pin-detail/:pinId" element={<PinDetails person={person} />} />
          <Route path="/create-pin" element={<CreatePin person={person} />} />
          <Route
            path="/search"
            element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
