import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h2 className="footer-left-">Sultan Hospital</h2>
          <h4 className="quicklinks-items">About Us</h4>
          <h4 className="quicklinks-items">Accessibility</h4>
          <h4 className="quicklinks-items">Privacy Policy</h4>
          <h4 className="quicklinks-items">Terms & Conditions</h4>
          <h4 className="quicklinks-items">Disclaimer</h4>
          <h4 className="quicklinks-items">Site Map</h4>
        </div>
        <div className="footer-right">
          <h2 className="quick-contacts">Quick Contacts</h2>
          <h4 className="quick-contacts-items">
            Emergency Phone Number: 9876543210
          </h4>
          <h4 className="quick-contacts-items">Ambulance: 9876543210</h4>
          <h4 className="quick-contacts-items">
            Book an Appointment: 1800-123-4567
          </h4>
          <h4 className="quick-contacts-items">
            E mail: abc@sultanhospitals.in
          </h4>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.7551817504277!2d92.34493826920253!3d26.23714318880774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ad1b671e47671%3A0xaed416cbce1bbfca!2sSultan%20Hospital%20and%20Research%20Centre!5e0!3m2!1sen!2sin!4v1720694826634!5m2!1sen!2sin"
          // width="300"
          // height="250"
          // style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="footer-map"
        />
      </div>
      <div className="footer2">
        <div className="line"></div>
        <h3>
          © Copyright Sultan Hospital - All Rights Reserved | Developed by
          <span className="bytesizedsolutions"> BiteSizedSolutions</span>
        </h3>
      </div>
    </>
  );
};

export default Footer;
