import React from "react";
import Access from "../../assets/images/icon-access-anywhere.svg";
import Store from "../../assets/images/icon-any-file.svg";
import Collaboration from "../../assets/images/icon-collaboration.svg";
import Security from "../../assets/images/icon-security.svg";

const Features: React.FC = () => (
  <section className="features-section">
    <div className="container">
      <div className="features-container">
        <div className="feature-row">
          {/* Single Feature */}
          <div className="feature">
            <img src={Access} alt="Access" />
            <h3 className="feature-heading"> Access your files, anywhere</h3>
            <p className="feature-description">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          {/* Single Feature End */}

          {/* Single Feature */}
          <div className="feature">
            <img src={Security} alt="Security" />
            <h3 className="feature-heading"> A Security you can trust</h3>
            <p className="feature-description">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          {/* Single Feature End */}
        </div>

        <div className="feature-row">
          {/* Single Feature */}
          <div className="feature">
            <img src={Collaboration} alt="Collaboration" />
            <h3 className="feature-heading"> Real-time collaboration</h3>
            <p className="feature-description">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          {/* Single Feature End */}

          {/* Single Feature */}
          <div className="feature">
            <img src={Store} alt="Store" />
            <h3 className="feature-heading"> A Store any type of file</h3>
            <p className="feature-description">
              Whether youre sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
          {/* Single Feature End */}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
