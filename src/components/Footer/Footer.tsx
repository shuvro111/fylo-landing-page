import React from "react";
import Email from "../../assets/images/icon-email.svg";
import Location from "../../assets/images/icon-location.svg";
import Phone from "../../assets/images/icon-phone.svg";
import Logo from "../../assets/images/logo.svg";

const Footer: React.FC = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <img src={Logo} alt="Fylo" />
    </div>
    <div className="footer-top">
      <div className="footer-container-wrapper">
        <div className="footer-container">
          <div className="flex location">
            <img src={Location} alt="Location" className="location-icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="footer-container">
          <ul>
            <li className="flex">
              <img src={Phone} alt="" />
              <p>+1-543-123-4567</p>
            </li>
            <li className="flex">
              <img src={Email} alt="" />
              <p>example@fylo.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-container-wrapper">
        <div className="footer-container">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-container">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="footer-container social-icons ">
        <ul className="flex">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <p className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Shuvro Sarkar</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
