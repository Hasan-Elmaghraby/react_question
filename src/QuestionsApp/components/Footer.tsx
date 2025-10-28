import React from "react";

type FooterT = {
  children: React.ReactNode;
};

export const Footer: React.FC<FooterT> = ({ children }) => {
  return <footer>{children}</footer>;
};
