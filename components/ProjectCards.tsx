import React from "react";

interface IAppProps {
name:string;
description:string;
image:string;
}

const App: React.FC<IAppProps> = ({name, description, image}) => {
  return (
  <>
  <article className='text-center'>
  <img src={image} className='w-full rounded-md'/>
  <h3 className='mt-5 mb-1 text-xl font-semibold'>{name}</h3>
  <p className='text-lg text-gray-400'>{description}</p>
  </article>
  </>
);
};

export default App;