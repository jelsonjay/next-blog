import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ProjectCards from './ProjectCards'
interface IAppProps {}

const Projects: React.FC<IAppProps> = (props) => {
  return (
  <section className='py-20'>
  <div className='container mx-auto'>
  <Title>Projects</Title>
  <Paragraph>Front-end development</Paragraph>
  <div className='flex flex-wrap mx-4 mt-20'>

  <div className='w-4/12 px-4 pb-8'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>
  <div className='w-4/12 px-4 pb-8'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>

    <div className='w-4/12 px-4 pb-8'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>

<div className='w-4/12 px-4 pb-8'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>
  </div>
  </div>
  </section>
);
};

export default Projects;