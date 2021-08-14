import React from "react";

interface IAppProps {
left:any;
}

const Paragraph: React.FC<IAppProps> = ({left, children}) => {
  return (
  <>
  <p className={`mt-2 text-lg text-gray-600 ${!left ? "text-center" : ""}`}>{children}</p>
  </>
);
};

export default Paragraph;