import React from "react";
import Banner from "../../assets/images/illustration-intro.png";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => (
    <header className="header">
      <Navigation />
      <div className="hero-container">
        <div className="hero">
          <img src={Banner} alt="Banner" className="banner" />
          <h1 className="heading">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="description">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button type="button" className="cta-button">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );


export default Header;
