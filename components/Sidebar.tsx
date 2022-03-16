import React from 'react';
import { SanityDoc } from 'utils/interfaces';
import Link from 'next/link';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
// import { NavLink } from 'react-router-dom';
import NavLink from './NavLink';

export interface Props {
  person: SanityDoc | null;
  closeToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const isActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({ person, closeToggle }: Props) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overfow-y-scroll min-w-210 hide-scrollbar">
      <ul className="flex flex-col">
        <li className="flex px-5 gap-2 my-6 pt-1 w-190 items-center" onClick={handleCloseSidebar}>
          <Link href={'/'}>
            <img src="/logo.png" alt="logo" className="w-full" />
          </Link>
        </li>

        <li>
          <div className="flex flex-col gap-5">
            <NavLink href="/" exact>
              <RiHomeFill />
              Home
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;