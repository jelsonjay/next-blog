import React from "react";

interface IAppProps {}

const Footer: React.FC<IAppProps> = (props) => {
  return (
  <footer className="py-10 text-sm font-semibold tracking-wider text-center text-green-500 bg-blue-300">
    <h1>Jelson J JamStack</h1> 
  </footer>
);
};

export default Footer;