import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ProjectCards from './ProjectCards'
interface IAppProps {}

const Projects: React.FC<IAppProps> = (props) => {
  return (
  <section className='py-20' id="project">
  <div className='container px-10 mx-auto 2xl:px-0'>
  <Title>Projects</Title>
  <Paragraph>Front-end development</Paragraph>
  <div className='flex flex-wrap mx-4 mt-20'>

  <div className='w-full px-4 pb-8 md:w-4/12'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>
  <div className='w-full px-4 pb-8 md:w-4/12'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>

  <div className='w-full px-4 pb-8 md:pb-0 md:w-4/12'>
  <ProjectCards 
  name='KuiaOnline'
  description='This project was developed in 2014'
  image='../img/kuia.png'
  />
  </div>

<div className='w-full px-4 pb-8 md:w-4/12'>
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