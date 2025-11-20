import { Link } from "react-router-dom";
import "./Blog.css";

const LongArrowIcon = () => (
  <svg 
    className="circle-arrow"
    width="1em" 
    height="1em" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >

    <line x1="12" y1="12" x2="21" y2="12"></line> 
    <polyline points="14 5 21 12 14 19"></polyline>
  </svg>
);

const AnimatedAnchorTagBlog = ({ text = "Leer ahora", to = "/" }) => {
  return (
    <Link to={to} className="animated-button-blog">
      <span className="button-text">{text}</span>
      <span className="circle-wrapper">
        <span className="circle">
          <LongArrowIcon />
        </span>
      </span>
    </Link>
  );
};

export default AnimatedAnchorTagBlog;
