import React, {useState} from "react";
import Nav from "./Nav"
import Logo from "./Logo"
import Button from './Button'
import {FaAlignRight, FaTimes} from 'react-icons/fa'

import classnames from 'classnames';


interface IAppProps {}

const Navbar: React.FC<IAppProps> = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
  <>
    <div className='flex items-center py-10'>
    <div className='w-3/12'>
    <Logo />
    </div>
    <div className='hidden w-6/12 md:block'>
    <Nav dir="horizontal" scheme="light"/>
    </div>
    <div className='hidden w-6/12 text-right md:block'>
    <Button href="#contact" variant='outline-green'>Click Me</Button>
    </div>
    <div className="w-9/12 text-right md:hidden">
    <FaAlignRight className="inline-block text-white"
    onClick={() => setToggle(true)}
    />
    </div>
    </div>
    
    <div className={classnames("fixed top-0 z-10 w-full h-full p-10 bg-white md:hidden transition-all", toggle ? "right-0" : "-right-full")}>
     <FaTimes className="absolute w-10 text-xl top-8 right-8" onClick={() => setToggle(false)}/>
     <Nav dir="vertical" scheme="dark"/>
    </div>
    
    </>
);
};

export default Navbar;