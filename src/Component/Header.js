import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ status, onClick }) => {
  return (
    <header className="mobile-deader mobile-visible">
      <div className="mobile-header mobile-visible">
        <button
          onClick={() => onClick(!status)}
          className="menu-toggle mobile-visible"
        >
          <FaIcons.FaBars />
        </button>
        <Link to="/" className="mobile-logo-container">
          <div className="mobile-pg-title">Nguyễn Hạnh</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
