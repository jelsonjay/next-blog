import React from "react";


interface IAppProps {
  className: string;
  variant: string;
}

const Button: React.FC<IAppProps> = ({variant, className, children}) => {
 const addClassName = className ? `${className}` : ""
 const variants = {
   "outline-green": `border border-green-500 text-green-500`,
   "green": "bg-green-500 text-black"
 }

 const pickedVariant = variants[variant]
  return (
  <div>
 <a className={`inline-block px-10 py-3 font-sans text-lg ${pickedVariant} rounded-full ${addClassName}`}>
   {children}
   </a>
  </div>
);
};

export default Button;