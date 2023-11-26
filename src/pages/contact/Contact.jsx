import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import BlackLogo from "../../images/BlackLogo.png";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact_container">
      <h2 className="contact_title">Contact For Any Query</h2>
      <div className="contact_contetn">
        <div className="contact_info">
          <h3>Get In Touch</h3>
          <p>
            Please reach out to us if you want to more about anything related to
            this website, maybe related to Camps, Courses, and vents, Simply
            fill out this form, so we can connect to you soon.
          </p>
          <div className="contact_icons">
            <div className="contact_icon">
              <div className="c_svg_container">
                <FaHome />
              </div>
              <div className="contact_icon_text">
                <h4>Office</h4>
                <p>
                  ISKCON, A-5, Block A, Sector 33, Noida, Uttar Pradesh 201301
                </p>
              </div>
            </div>
            <div className="contact_icon">
              <div className="c_svg_container">
                <FaPhoneAlt />
              </div>
              <div className="contact_icon_text">
                <h4>Mobile</h4>
                <p>+91 98705 90151</p>
              </div>
            </div>
            <div className="contact_icon">
              <div className="c_svg_container">
                <IoMdMail />
              </div>
              <div className="contact_icon_text">
                <h4>Email</h4>
                <p>contact.selfcareschool@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_map">
          <img src={BlackLogo} alt="" />
        </div>
        <div className="contact_form">
          <form action="">
            <div className="contact_name_mail">
              <div className="n_i">
                <input type="text" placeholder="Name:" />
              </div>
              <div className="n_i">
                <input type="number" placeholder="Number:" />
              </div>
            </div>
            <div className="contact_number">
              <input type="text" name="" id="" placeholder="Email:" />
            </div>
            <div className="contact_number">
              <textarea type="text" name="" id="" placeholder="Message" />
            </div>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
