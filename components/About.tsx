import React from "react";
import Paragraph from "./Paragraph";
import Title from './Title'
interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
  <>
    <section className='py-24' id="about">
    <div className='container px-10 mx-auto 2xl:px-0'>
    <Title>About Us</Title>
    <Paragraph>Who's this guy?</Paragraph>
    <div className='flex flex-wrap mx-auto mt-10 md:flex-start lg:items-center xl:w-9/12'>
    <div className='w-full px-10 mb-10 md:mb-0 md:w-4/12'>
    <img src='/jay.png' className='w-full' />
    </div>
    <div className='w-full px-10 md:w-8/12'>
    <p className='text-lg landing-relaxed'>Hi, my name is Jelson J, I'm a Freelance Front-end Developer & Designer. I'm very passion about everything related to web development, I spend much of my spare time learning and obsessing about the latest web technologies. I think it’s important to love doing what you do, so the passion will continue to motivate and improve my skills.</p>
    <p className='mt-6 text-lg'>I have a long held interest for the creativity of coding. I have a keen interest in web development and through self-funded studies have built my knowledge in this to a level where I am actively seeking a new role within programming that allows room for growth with an ambitious company.</p>
    <p className='text-lg'>* Be a web developer must be a problem solving skills, I learn every day how to split large complex goals into small, simpler ones.</p>
    <p className='text-lg'>* “Everyone in this country should learn how to program because it teaches you how to think” - Steve Jobs</p>
    </div>
    </div>
    </div>
    </section>
  </>
);
};

export default App;