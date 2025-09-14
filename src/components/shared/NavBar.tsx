import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="flex gap-4">
      <h1>navbar</h1>
      <Link to='/profile'>profile</Link>
      <Link to='/favorite'>favorite</Link>
    </div>
  );
};

export default NavBar;
