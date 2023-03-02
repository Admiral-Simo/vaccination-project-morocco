import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../reusable/Profile";
import Search from "../reusable/Search";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      {pathname === "/children" ? <Search /> : <div />}
      <Profile />
    </div>
  );
};

export default Navbar;
