import React from "react";


interface IAppProps {
  className?: string;
  variant: any;
  pill?: any;
  href?: any;

}

const Button: React.FC<IAppProps> = ({variant, className, children, pill, href}) => {
 const addClassName = className ? `${className}` : ""
 const variants = {
   "outline-green": `border border-green-500 text-white hove:text-white hover:bg-green-500`,
   "green": "bg-green-500 text-black hover:bg-green-600",
   "black": "bg-black hover:bg-opacity-80 text-white"
 }

 const pickedVariant = variants[variant]
  return (
  <div>
 <a href={href} className={`transition inline-block px-10 py-3 font-sans text-lg ${pill ? "" : "rounded-full"} ${pickedVariant} ${addClassName}`}>
   {children}
   </a>
  </div>
);
};

export default Button;