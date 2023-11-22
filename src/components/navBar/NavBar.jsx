import React from "react";
import "./navBar.scss";
import BlackLogo from "../../images/BlackLogo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiBookshelf, GiCampfire } from "react-icons/gi";
import { MdEventNote } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
const NavBar = () => {
  const location = useLocation();
  const hideNavBar =
    location.pathname.startsWith("/dashboard") && location.pathname !== "/";
  const [open, setOpen] = useState(false);

  if (hideNavBar) {
    return null;
  }

  return (
    <nav className={`fixed`}>
      <div className="nav_logo">
        <Link to="/">
          <img src={BlackLogo} alt="" />
        </Link>
      </div>
      <div className="nav_links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <AiFillHome /> Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <GiBookshelf /> COURSES
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <MdEventNote /> EVENTS
        </NavLink>
        <NavLink
          to="/camps"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <GiCampfire /> CAMPS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <RiContactsBookFill /> CONTACT US
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <BsFillInfoSquareFill />
          ABOUT US
        </NavLink>
      </div>
      <div className={`ham ${open && "open_ham"}`}>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <AiFillHome /> Home
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          to="/courses"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <GiBookshelf /> COURSES
        </NavLink>
        <NavLink
          to="/events"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <MdEventNote /> EVENTS
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          to="/camps"
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <GiCampfire /> CAMPS
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <RiContactsBookFill /> CONTACT US
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav_link nav_link_active" : "nav_link"
          }
        >
          <BsFillInfoSquareFill />
          ABOUT US
        </NavLink>
      </div>

      <div className="nav_btn">
        <Link to="/login">
          <button>JOIN US</button>
        </Link>
        <div id="menu-wrapper" onClick={() => setOpen(!open)}>
          <div id={`hamburger-menu`} className={`${open && "open"}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
