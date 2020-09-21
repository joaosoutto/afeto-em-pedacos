import React, { useState } from 'react';
// import {FaArrowCircleUp} from 'react-icons/fa';
import '../App.css';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <button
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
      >
        <path
          fill="none"
          stroke="#e7e9e9"
          strokeWidth={2}
          d="M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
