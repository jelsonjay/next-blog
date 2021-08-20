import React from "react";
import Paragraph from "./Paragraph";
import Title from "./Title";
import ContactItems from './ContactItems'
import Field from "./Field";
import Button from "./Button";

interface IAppProps {}

const Contact: React.FC<IAppProps> = (props) => {
  return (
  <>
  <section className='container px-10 mx-auto 2xl:px-0' id="contact">
  <div className='flex flex-wrap rounded-lg bg-primary'>
  <div className='w-full border-b md:border-r md:w-6/12 border-primary-200'>
  <div className='p-10 lg:px-20 lg:py-16 md:p-14'>
  <Title left>Contact</Title>
  <Paragraph left>Get in touch!</Paragraph>
  <ContactItems
  label='Mail'
  value='info@gmail.com'
  icon='image'
  className='mt-10'
  />

  <ContactItems
  label='Phone' 
  value='+44 025 589'
  icon='image'
  className='mt-6'
  />

  <ContactItems
  label='Facebook'
  value='facebook.com'
  icon='image'
  className='mt-6'
  />
  </div>

  </div>
  
  <div className='w-full md:w-6/12'>
  <form className="p-10 lg:px-20 lg:py-16 md:p-14">
  <div className='flex flex-wrap -mx-4'>

  <div className='w-full px-4 lg:w-6/12'>
  <Field 
  label="Name"
  name="name"
  type="text"
  />
  </div>

 <div className='w-full px-4 lg:w-6/12'>
  <Field 
  label="Email"
  name="email"
  type="text"
  />
  </div>
  </div>

 
  <Field 
  label="Subject"
  name="subject"
  type="text"
  />

  <Field 
  label="Message"
  name="message"
  type="textarea"
  className='h-40'
  />
 
  <Button pill variant='black' className="w-full text-center">Send Enquiry</Button>
  </form>
  </div>
  </div>
  </section>
  </>
);
};

export default Contact;