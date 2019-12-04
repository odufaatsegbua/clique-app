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
    
          <a onClick={()=> {localStorage.removeItem("userID"); window.location.replace("/")}} class="btn btn-info btn-sm" id="logout">
=======
          <a href="#" class="btn btn-info btn-sm">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </a>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
