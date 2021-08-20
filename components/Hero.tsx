import React from "react";
import Navbar from '../components/Navbar'
import Button from '../components/Button'
interface IAppProps {

}

const Hero: React.FC<IAppProps> = (props) => {
  return (
  <>
    <div className='bg-hero 2xl:h-[900px] xl:h-[712px] lg:h-[500px] md:h-[500px] pb-20'>
    <div className='container px-10 mx-auto 2xl:px0'>
    <Navbar />
    <div className='text-center xl:mt-20 lg:mt-10 md:mt-6'>
    <h1 className='w-8/12 mx-auto font-sans text-3xl font-semibold text-white xl:w-8/12 lg:w-10/12 2xl:w-6/12'>DIGITAL COMPANY SOFTWARE</h1>
    <p className='mx-auto mt-6 font-sans text-lg text-white 2xl:w-3/12 xl:w-4/12 lg:w-6/12 text-opacity-60'>WEB DEVELOPER & DESIGNER</p>
    <Button href="#project" pill className='mt-14' variant='green'>Click</Button>
    </div>
    </div>
    </div>

  </>
);
};

export default Hero;