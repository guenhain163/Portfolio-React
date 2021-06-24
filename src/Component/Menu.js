import Navbar from "./Navbar/Navbar";
import Avatar from "../images/photo.jpg";

const Menu = ({ showSidebar, itemClick }) => {
  return (
    <div
      id="pg-navbar"
      className={
        showSidebar
          ? "pg-navbar mobile-menu-hide active"
          : "pg-navbar mobile-menu-hide"
      }
    >
      <div className="pg-container">
        <div className="my-photo">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="pg-title">Nguyễn Hạnh</div>
        <Navbar itemClick={itemClick} />
      </div>
    </div>
  );
};

export default Menu;
