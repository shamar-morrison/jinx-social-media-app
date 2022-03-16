import React from 'react';
import { SanityDoc } from 'utils/interfaces';
import Link from 'next/link';
import { Link as RouterLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export interface Props {
  person: SanityDoc | null;
  closeToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';

const isActiveStyle =
  'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const categories = [
  { name: 'Animals' },
  { name: 'Technolgy' },
  { name: 'Wallpapers' },
  { name: 'Food' },
  { name: 'Travel' },
];

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
            <NavLink
              to="/home"
              className={({ isActive }: any) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
            >
              <RiHomeFill />
              Home
            </NavLink>
            <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Categories</h3>
            {categories.slice(0, categories.length - 1).map(category => (
              <NavLink
                to={`/category/${category.name}`}
                className={({ isActive }: any) => (isActive ? isActiveStyle : isNotActiveStyle)}
                onClick={handleCloseSidebar}
                key={category.name}
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </li>
      </ul>
      {person && (
        <RouterLink to={`/user-profile/${person._id}`} className={'flex my-5 mb-3 gap-2 items-center'}>
          <img src={person.image} className="w-10 h-10 rounded-full" alt="user profile" />
          <p>{person.userName}</p>
        </RouterLink>
      )}
    </div>
  );
};
export default Sidebar;