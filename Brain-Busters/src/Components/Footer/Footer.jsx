import React from "react";
import Logo from "../../assets/icons/Brain-Buster-logo.png";
import phone from "../../assets/icons/tel-phone.png";
import email from "../../assets/icons/email.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import threads from "../../assets/icons/Threads.png";
import "../Footer/Footer.scss";

function Footer() {
  return (
    <>
    
      <footer className="footer-container">
      
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <h1>Brain Buster</h1>
        </div>
        <div className="footer-address">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Courses</a>
            <a href="">Contact us</a>
          </div>

          <div className="footer-content">
            <h4>About Brain Busters</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit pariatur recusandae earum. Commodi recusandae ut
              aperiam deserunt placeat velit nisi quas impedit dignissimos.
              Omnis eligendi rem id corporis quaerat explicabo?
            </p>
          </div>
          <div className="contact-us">
            <h4>Contact us</h4>
            <div className="phone">
              <img src={phone} alt="contact" />
              <p>+91 6379492630</p>
            </div>
            <div className="email">
              <img src={email} alt="email" />
              <p>baby@gmail.com</p>
            </div>
          </div>
          <div className="follow-us">
            <h4>Follow us on</h4>
            <div className="social-media">
              <img src={facebook} alt="facebook" />
              <p>Facebook</p>
            </div>
            <div className="social-media">
              <img src={instagram} alt="instagram" />
             <p>Instagram</p>
            </div>
            <div className="social-media">
              <img src={threads} alt="threads" />
              <p>Threads</p>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}

export default Footer;
