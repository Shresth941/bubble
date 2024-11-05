import React, { useEffect, useState } from 'react';
import './bubble.css';

const Bubble = () => {
  const [isBurst, setIsBurst] = useState(false);
  const [bubbleSize, setBubbleSize] = useState(100);
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    const moveBubble = () => {
      setPosition({
        x: `${Math.random() * 80 + 10}%`,
        y: `${Math.random() * 80 + 10}%`
      });
    };
    const interval = setInterval(moveBubble, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const maxSize = 200;
      const newSize = 100 + (scrolled / docHeight) * (maxSize - 100);
      setBubbleSize(newSize);
      if (scrolled >= docHeight) triggerBurst();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerBurst = () => {
    setIsBurst(true);
    setIsVisible(false);

    const newFragments = Array.from({ length: 10 }, () => ({
      id: Math.random(),
      x: `${Math.random() * 30 - 15}%`,
      y: `${Math.random() * 30 - 15}%`,
      size: `${Math.random() * 10 + 5}px`,
      delay: `${Math.random() * 0.2}s`,
    }));
    setFragments(newFragments);

    setTimeout(() => {
      setIsBurst(false);
      setBubbleSize(100);
      setIsVisible(true);
      setFragments([]);
    }, 1500);
  };

  const handleBurst = () => {
    triggerBurst();
  };

  return (
    <>
      <div
        className={`bubble ${isBurst ? 'burst' : ''}`}
        style={{
          width: bubbleSize,
          height: bubbleSize,
          top: position.y,
          left: position.x,
          display: isVisible ? 'block' : 'none',
        }}
        onClick={handleBurst}
      ></div>

      {isBurst && fragments.map(fragment => (
        <div
          key={fragment.id}
          className="bubble-fragment"
          style={{
            top: position.y,
            left: position.x,
            width: fragment.size,
            height: fragment.size,
            animationDelay: fragment.delay,
            '--x': fragment.x,
            '--y': fragment.y,
          }}
        ></div>
      ))}
    </>
  );
};

export default Bubble;
