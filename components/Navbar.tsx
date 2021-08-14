import React from "react";
import Nav from "./Nav"
import Logo from "./Logo"
import Button from './Button'

interface IAppProps {}

const Navbar: React.FC<IAppProps> = (props) => {
  return (
  <>
    <div className='flex items-center py-10'>
    <div className='w-3/12'>
    <Logo />
    </div>
    <div className='w-6/12'>
    <Nav />
    </div>
    <div className='w-6/12 text-right'>
    <Button className='' variant='outline-green'>Click Me</Button>
    </div>
    </div>
    
    </>
);
};

export default Navbar;