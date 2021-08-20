import React from "react";

interface IAppProps {
label: string;
value?: string;
icon: string;
className?: string 
}

const App: React.FC<IAppProps> = ({label, icon, value, className}) => {
  const addClassName = className ? `${className}` : "";
  return (
  <>
  <div className={`flex items-start ${addClassName}`}>
  <img src={icon} className='w-8'/>
  <div className='ml-4'> 
  <div className='mb-2 text-sm font-semibold'>{label}</div>
  <div className='text-lg font-semibold'>{value}</div>
  </div>
  </div>
  </>
);
};

export default App;