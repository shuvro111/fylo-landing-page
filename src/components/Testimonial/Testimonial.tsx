import React from "react";
import Profile1 from "../../assets/images/profile-1.jpg";
import Profile2 from "../../assets/images/profile-2.jpg";
import Profile3 from "../../assets/images/profile-3.jpg";

const Testimonial: React.FC = () => (
  <section className="testimonial-section">
    <div className="container">
      <div className="testimonial-container">
        {/* Single Testimonial */}
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user">
            <img src={Profile1} alt="" />
            <div>
              <h5> Satish Patel</h5>
              <h6>Founder & CEO, Huddle</h6>
            </div>
          </div>
        </div>
        {/* Single Testimonial End */}

        {/* Single Testimonial */}
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user">
            <img src={Profile2} alt="" />
            <div>
              <h5> Bruce McKenzie</h5>
              <h6>Founder & CEO, Huddle</h6>
            </div>
          </div>
        </div>
        {/* Single Testimonial End */}

        {/* Single Testimonial */}
        <div className="testimonial">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="user">
            <img src={Profile3} alt="" />
            <div>
              <h5> Iva Boyd</h5>
              <h6>Founder & CEO, Huddle</h6>
            </div>
          </div>
        </div>
        {/* Single Testimonial End */}
      </div>
    </div>
  </section>
);

export default Testimonial;
