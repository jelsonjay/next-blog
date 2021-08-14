import React from "react";

interface IAppProps {
name: string;
level: string;
image: string;
imgClassName: any;
}

const App: React.FC<IAppProps> = ({name,level,image, imgClassName}) => {
  
  const addImgClassName = imgClassName ? `${imgClassName}` :'';
  
  return (
  <>
  <div className='flex items-center p-6 bg-white rounded-lg shadow-skill'>
  <img src={image} className={`mr-4 ${addImgClassName}`}/>
  <div>
  <h4 className='text-lg font-semibold'>{name}</h4>
  <p className='mt-1 text-sm font-semibold text-gray-400'>{level}</p>
  </div>
  </div>
  </>
);
};

export default App;