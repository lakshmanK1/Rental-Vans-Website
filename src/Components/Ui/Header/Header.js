import React from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

import "./Header.css";

function Header() {
  const isActiveStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <div className="logo-div">
        <NavLink className="logo-title" to="/">
          VanLife
        </NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              className="navlink-tab"
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="host"
            >
              Host
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navlink-tab"
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="vans"
            >
              Vans
            </NavLink>
          </li>
          
          <li>
            <NavLink
              className="navlink-tab"
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="aboutus"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navlink-tab"
              style={({ isActive }) => (isActive ? isActiveStyle : null)}
              to="auth"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
