import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import SkillsCard from './SkillsCard'
interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
  <>
  <section className='py-28 bg-primary'>
  <div className='container mx-auto'>
  <Title>Skills Set</Title>
  <Paragraph>The Languages I Speak:
</Paragraph>
  <div className='flex flex-wrap mx-4 mt-20'>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='javascript'
   level='Front-end development'
   image='../logos/javascript.svg'
   imgClassName='h-16 rounded-full'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

    <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='javascript'
   level='Front-end development'
   image='../logos/javascript.svg'
   imgClassName='h-16 rounded-full'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

    <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='javascript'
   level='Front-end development'
   image='../logos/javascript.svg'
   imgClassName='h-16 rounded-full'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

  <div className='w-2/12 px-4 pb-8'>
   <SkillsCard 
   name='Reactjs'
   level='Front-end development'
   image='../logos/react.svg'
   imgClassName='h-16'
   />
  </div>

  </div>
  </div>
  </section>
  </>
);
};

export default App;