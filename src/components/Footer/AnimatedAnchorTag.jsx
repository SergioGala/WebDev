import React from 'react';
import './Footer.css';

const AnimatedAnchorTag = ({ text = 'red', href = '/', fontSize = '16px' }) => {
  return (
    <a href={href} className="animated-button">
      <span className="arrow-circle left">⭢</span>
      <span className="button-text" style={{ fontSize }}>{text}</span>
      <span className="arrow-circle right">⭢</span>
    </a>
  );
};

export default AnimatedAnchorTag;