import React from "react";

interface IAppProps {
  left: any
}

const Title: React.FC<IAppProps> = ({left, children}) => {
  return (
  <>
  <h2 className={`font-sans text-2xl font-semibold ${!left ? "text-center" : ""}`}>{children}</h2>
  </>
);
};

export default Title;