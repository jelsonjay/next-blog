import React from "react";
import classnames from 'classnames';

interface IAppProps {
href?: any;
scheme: any;
}

const NavItem: React.FC<IAppProps> = ({children, href, scheme}) => {
  
const schemes = {
 light: "text-white text-opacity-60 hover:text-opacity-100",
 dark: "text-black"
}

const pickedScheme = schemes[scheme];
  return (
  <div>
  <li><a href={href} 
  className={classnames("text-lg font-semibold  transition", pickedScheme)}>
  {children}
  </a>
  </li>
  </div>
);
};

export default NavItem;