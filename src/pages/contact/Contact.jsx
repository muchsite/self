import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import BlackLogo from "../../images/BlackLogo.png";
import "./contact.scss";
import { useMainContext } from "../../utils/context";
import Loading from "../../components/loading/Loading";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const { baseURL } = useMainContext();
  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await axios.post(baseURL + "api/contact/", {
        full_name: name,
        email: mail,
        wh_num: number,
      });
      setSuccess(true);
      setName("");
      setNumber("");
      setMail("");
      setMessage("");
      alert("Message has been sent!");
      setSending(false);
      setErrorMessage({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      setSending(false);
    }
  };
  console.log(errorMessage);
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
          <form action="" onSubmit={handleSend}>
            <div className="contact_name_mail">
              <div className="n_i relative_contact">
                <input
                  type="text"
                  placeholder="Name:"
                  required
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </div>
              <div className="n_i relative_contact">
                <input
                  type="number"
                  placeholder="Number:"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.currentTarget.value)}
                />
              </div>
            </div>
            <div
              className={`contact_number relative_contact ${
                "email" in errorMessage && "outline_red"
              }`}
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Email:"
                required
                value={mail}
                onChange={(e) => setMail(e.currentTarget.value)}
              />
              {"email" in errorMessage && (
                <div className="error_contact">Pleas Provide Valid Email !</div>
              )}
            </div>
            <div className="contact_number relative_contact">
              <textarea
                type="text"
                name=""
                id=""
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
              />
            </div>
            <button type="submit">{sending ? <Loading /> : "Send"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
