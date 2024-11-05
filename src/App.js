// App.js
import React from 'react';
import Bubble from './components/bubble/bubble';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import HomepageContent from './components/HomepageContent/Homepagecontent';

function App() {
  return (
    <div className="App">
      <Header />
      <Bubble />
      <HomepageContent/>
      <div className="content">
        {/* Placeholder content to enable scrolling */}
        <h2>Welcome to the Bubble Burst Website</h2>
        <p style={{ color: '#111' }}>This is a sample content to allow page scrolling.</p>
{[...Array(50)].map((_, i) => (
  <p key={i} style={{ color: '#111' }}>Scroll down to see the bubble effect...</p>
))}

      </div>
      <Footer />
    </div>
  );
}

export default App;
