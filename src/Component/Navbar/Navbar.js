import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarData } from "./NavbarData";

const Navbar = ({ itemClick }) => {
  const path = useLocation();
  // const [navitem, setNavItem] = useState(0);

  const activeNavItem = (index) => {
    itemClick(true);
    // setNavItem(index);
  };

  return (
    <>
      <div className="pg-nav">
        <ul id="menu" className="pg-main-menu">
          {NavbarData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => activeNavItem(index)}
                className={path.pathname === item.path ? "active" : null}
              >
                <Link to={item.path} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
