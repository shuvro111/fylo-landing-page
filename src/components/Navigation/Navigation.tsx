import React from "react";
import Logo from "../../assets/images/logo.svg";

const Navigation: React.FC = () => (
    <nav className="navigation">
      <div className="logo-container">
        <img src={Logo} alt="Fylo" className="logo" />
        {/* <h1 className="logo-text">Fylo</h1> */}
      </div>
      <ul className="menu">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );

export default Navigation;
