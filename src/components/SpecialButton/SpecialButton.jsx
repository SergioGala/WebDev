import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SpecialButton.css";

const SpecialButton = ({ to = "/"}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className={`circular-arrow-link ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="circle">
        <span className="circle-arrow">→</span>
      </span>
    </Link>
  );
};

export default SpecialButton;




