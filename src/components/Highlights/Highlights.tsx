import React from "react";
import ArrowRight from "../../assets/images/icon-arrow.svg";
import Productive from "../../assets/images/illustration-stay-productive.png";

const Highlights: React.FC = () => (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-container">
          <img src={Productive} alt="Stay Productive" />
          <div className="highlight-content">
            <h2 className="highlight-heading">
              Stay productive,
              <br /> wherever you are
            </h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#" className="btn-underline">
              See how Fylo works{" "}
              <span>
                {" "}
                <img src={ArrowRight} alt="Arrow" srcSet="" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )

export default Highlights;
