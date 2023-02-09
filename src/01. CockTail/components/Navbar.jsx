import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">CockTail</Link>
            </li>
          </ul>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
