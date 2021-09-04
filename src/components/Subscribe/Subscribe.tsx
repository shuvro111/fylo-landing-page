import React from "react";

const Subscribe: React.FC = () => (
  <section className="subscribe-section">
    <div className="container">
      <div className="subscribe-container">
        <h2> Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form action="" className="subscribe-form">
          <input
            type="text"
            name="subscribe"
            id="subscribe"
            placeholder="email@website.com"
          />
          <button type="button" className="">
            Get Started For Free
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
