import React from "react";

interface BaseT {
  children: React.ReactNode;
}

export const Base: React.FC<BaseT> = ({ children }) => {
  return <main className="main">{children}</main>;
};
