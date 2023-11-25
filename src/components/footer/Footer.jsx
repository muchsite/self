import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/WhiteLogo.png";
import "./footer.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";

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
        <p>
          Address: ISKCON, A-5, Block A, Sector 33, Noida, Uttar Pradesh 201301
        </p>
        <p>Contact: +91 98705 90151</p>
        <p>Email : contact.selfcareschool@gmail.com</p>
      </div>
      <div className="footer_links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/events">Events</Link>
        <Link to="/camps">Camps</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">ABOUT Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms And Conditions </Link>
        <Link to="/refund">Refund Policy</Link>
      </div>
      <div className="footer_social">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default Footer;
