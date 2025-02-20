import React from "react";
import "./Footer.css";
import { FaGithub, FaMedal,FaLinkedin ,FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.47361662488!2d75.7284133335396!3d11.255723875819136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1740065623202!5m2!1sen!2sin"></iframe>
        </div>
        <div className="footer-right">
          <h1 id="contact">contact</h1>
          <div className="icon">
            <a href="https://github.com/Amith567"><FaGithub /></a>
            <a href="https://app.mulearn.org/profile/amithp@mulearn"><FaMedal /></a>
            <a href="https://www.linkedin.com/in/amith-p-9124a727a/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/amith___anil___/?hl=en"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-end">all rights are reserved</div>
    </div>
  );
}

export default Footer;
