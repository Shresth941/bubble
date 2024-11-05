import React from 'react';
import './Homepagecontent.css';

const HomepageContent = () => {
  return (
    <div className="HomepageContent__Wrapper">
      <div className="Header">
        <div className="Header__MobileMenu">
          <div className="-side --parent">
            <a href="/dead-wallabies">
              <span>Latest</span>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path d="M0 6.672L11.856 6.672L7.968 2.808L10.752 0L19.44 8.712L10.752 17.424L7.944 14.64L11.856 10.728L0 10.728L0 6.672Z" fill="#010101" />
              </svg>
            </a>
          </div>
          <div className="-side --parent">
           
          </div>
          <div className="-side --parent">
            <a href="/about" className="is-active">
              <span>About Rouser</span>
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path d="M0 6.672L11.856 6.672L7.968 2.808L10.752 0L19.44 8.712L10.752 17.424L7.944 14.64L11.856 10.728L0 10.728L0 6.672Z" fill="#010101" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="HomepageContent__Intro">
        <div className="HomepageContent__Section">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <h1>Rouser's activism makes people think.</h1>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-5 offset-md-1">
                <p>Our interventions can be funny, scary, strange — whatever it takes to grab people's attention and make them stop and think.</p>
                <p>Rouser does this to wake as many people as possible to the burning need for action on climate change and eco-collapse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional content sections can be replicated as shown */}
    </div>
  );
};

export default HomepageContent;
