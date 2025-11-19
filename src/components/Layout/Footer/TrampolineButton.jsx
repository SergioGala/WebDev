import React from 'react';
import './Footer.css';

const TrampolineButton = ({ href = '/', text = 'Acción legal' }) => {
  return (
    <a href={href} className="trampoline-button">
      <span className="label-wrapper">
        <span className="bullet-dot"></span>
        <span className="button-label">{text}</span>
      </span>
    </a>
  );
};

export default TrampolineButton;