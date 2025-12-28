import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl px-4 md:px-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
