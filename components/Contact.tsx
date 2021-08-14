import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ContactItems from './ContactItems'

interface IAppProps {}

const Contact: React.FC<IAppProps> = (props) => {
  return (
  <>
  <section className='container mx-auto'>
  <div className='flex rounded-lg bg-primary p-14'>
  <div className='w-6/12'>
  <Title left>Contact</Title>
  <Paragraph left>Get in touch!</Paragraph>
  <ContactItems 
  value='Form'
  icon='image'
  label='lebel text'
  />
  </div>
  <div className='w-6/12'>
b
  </div>
  </div>
  </section>
  </>
);
};

export default Contact;