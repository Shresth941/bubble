import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-12 col-md-10 offset-md-1">
            <div className="footer-heading">
              <h1>Let's burst some<br />damn bubbles.</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-1">
            <div className="footer-content">
              <p>
                We’re growing a gang of people who care enough to help our interventions
                spread like an unseasonal forest fire. Sign up to get them as they drop
                and help wake up the world.
              </p>
              <button className="signup-button">
                <span>Sign up now</span>
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.454867 8.066L0.454867 12.46L13.2989 12.46L9.06087 16.698L12.1029 19.714L21.5149 10.276L12.1029 0.837999L9.08687 3.88L13.2989 8.066L0.454867 8.066Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
