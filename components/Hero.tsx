import React from "react";
import Navbar from '../components/Navbar'
import Button from '../components/Button'
interface IAppProps {}

const Hero: React.FC<IAppProps> = (props) => {
  return (
  <>
    <div className='bg-hero h-[712px] bg-purple-500'>
    <div className='container mx-auto'>
    <Navbar />
    <div className='mt-20 text-center'>
    <h1 className='w-8/12 mx-auto font-sans text-3xl font-semibold'>DIGITAL COMPANY SOFTWARE</h1>
    <p className='mx-auto mt-6 font-sans text-lg text-black text-opacity-60'>WEB DEVELOPER & DESIGNER</p>
    <Button className='mt-14' variant='green'>Click</Button>
    </div>
    </div>
    </div>

  </>
);
};

export default Hero;