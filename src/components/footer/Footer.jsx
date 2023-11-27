import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/WhiteLogo.png";
import "./footer.scss";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaHome } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const hideNavBar =
    location.pathname.startsWith("/dashboard") && location.pathname !== "/";
  const [open, setOpen] = useState(false);

  if (hideNavBar) {
    return null;
  }

  return (
    <div className="footer_container">
      <img src={logo} className="footer_logo" alt="" />
      <div className="footer_info">
        <div className="f_icons_div">
          <FaHome />
          <p>ISKCON, A-5, Block A, Sector 33, Noida, Uttar Pradesh 201301</p>
        </div>
        <div className="f_icons_div">
          <FaPhoneAlt />
          <p> +91 98705 90151</p>
        </div>
        <div className="f_icons_div">
          <IoMdMail />
          <p>contact.selfcareschool@gmail.com</p>
        </div>
      </div>
      <div className="footer_links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/events">Events</Link>
        <Link to="/camps">Retreat</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About us</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms And Conditions </Link>
        <Link to="/refund">Refund Policy</Link>
      </div>
      <div className="footer_social">
        <a href="https://www.facebook.com/pvd.LNS/" target="_blank">
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/pundarikavidyanidhidas/"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.youtube.com/@pundarika_vidyanidhi_das"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
