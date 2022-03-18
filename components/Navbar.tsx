import React from 'react';

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return <div>Navbar</div>;
};

export default Navbar;