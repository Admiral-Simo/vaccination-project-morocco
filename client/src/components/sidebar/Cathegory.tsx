import React from "react";
import { Link } from "react-router-dom";

interface CathegoryProps {
  title: string;
  path: string;
  children: React.ReactNode;
}

const Cathegory = ({ title, children, path }: CathegoryProps) => {
  return (
    <Link className="dashboard-cathegory" to={path}>
      {children}
      <h2 className="text-md capitalize hidden md:block">{title}</h2>
    </Link>
  );
};

export default Cathegory;
