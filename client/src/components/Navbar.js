import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="header-container">
          <ul className="nav justify-content-center" id="navList">
            <li className="navItem">
              <a className="navLink" href="/profile">
                Dashboard
              </a>
            </li>
            <li className="navItem">
              <a className="navLink" href="/communities">
                Communities
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <a href="home" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
      </a>
    </div>
  );
}

export default Navbar;
