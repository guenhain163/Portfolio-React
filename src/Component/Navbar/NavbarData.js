import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

export const NavbarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <FaIcons.FaHome />,
    cName: "nav-link",
  },
  {
    title: "AboutMe",
    path: "/AboutMe",
    icon: <BsIcons.BsPeopleCircle />,
    cName: "nav-link",
  },
  {
    title: "Resume",
    path: "/Resume",
    icon: <FaIcons.FaRegIdCard />,
    cName: "nav-link",
  },
  {
    title: "Portfolio",
    path: "/Portfolio",
    icon: <FaIcons.FaBriefcase />,
    cName: "nav-link",
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <FaIcons.FaEnvelope />,
    cName: "nav-link",
  },
];
