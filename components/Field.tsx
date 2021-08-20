import React from "react";

interface IAppProps {
  label:string;
  name:string;
  type?: string;
 className?: string;

}

const Field: React.FC<IAppProps> = ({label, name,type, className}) => {

  const addClassName = className ? `${className}` : "";

  const formClassName = `w-full px-6 py-3 bg-transparent border border-primary-300 ${addClassName}`;
  return (
  <div className='mb-6'>

  <label htmlFor={name} className='block mb-1 text-sm font-semibold'>{label}</label>
  {type === "text" && (
  <input type="text" name={name} id={name} className={formClassName} />
  )}
  
  {type === "textarea" && (
  <textarea name={name} id={name} className={formClassName} />
  )}
  
  </div>
);
};

export default Field;