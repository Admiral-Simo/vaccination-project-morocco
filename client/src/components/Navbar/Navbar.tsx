import React from "react";
import Profile from "../reusable/Profile";
import Search from "../reusable/Search";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;
