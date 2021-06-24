import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="menu-toggle mobile-visible">
      <FaIcons.FaBars />
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};

export default Button;
