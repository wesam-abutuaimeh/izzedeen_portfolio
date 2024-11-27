import { Link } from "react-router-dom";
import "./style.css";

const CustomLink = ({ target, text }) => {
  return (
    <Link to={target} className="link">
      {text}
    </Link>
  );
};
export default CustomLink;
