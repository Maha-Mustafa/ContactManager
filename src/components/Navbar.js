import React from "react";
import ".././styles.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="header">
        <div className="site-title">
          <h2>ContactSystem</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contactcard">Add Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
