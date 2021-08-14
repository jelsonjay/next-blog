import React from "react";

interface IAppProps {}

const NavItem: React.FC<IAppProps> = ({children}) => {
  return (
  <div>
  <li><a className='text-lg text-opacity-60 font-semibold'>{children}</a></li>
  </div>
);
};

export default NavItem;