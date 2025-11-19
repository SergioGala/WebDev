import { Link } from "react-router-dom";
import "./Blog.css";

const AnimatedAnchorTagBlog = ({ text = "Leer ahora", to = "/" }) => {
  return (
    <Link to={to} className="animated-button-blog">
      <span className="arrow-circle left">⭢</span>
      <span className="button-text">{text}</span>
      <span className="arrow-circle right">⭢</span>
    </Link>
  );
};

export default AnimatedAnchorTagBlog;

