import React from "react";
import Paragraph from "./Paragraph";
import Title from './Title'
interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
  <>
    <section className='py-24'>
    <div className='container mx-auto'>
    <Title>About Us</Title>
    <Paragraph>Who's this guy?</Paragraph>
    <div className='flex items-center w-9/12 mx-auto mt-10'>
    <div className='w-4/12 p-10'>
    <img src='/jay.png' className='w-full' />
    </div>
    <div className='w-8/12 px-10'>
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