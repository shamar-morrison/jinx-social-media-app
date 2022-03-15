import React from 'react';
import { SanityDoc } from 'utils/interfaces';

interface Props {
  person: SanityDoc | null;
  closeToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ person, closeToggle }: Props) => {
  return <div>Sidebar</div>;
};

export default Sidebar;
