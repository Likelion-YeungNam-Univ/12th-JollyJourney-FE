// src/components/common/Footer.js
import React from 'react';
import footerImage from '../../assets/images/footer-image.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerImage} alt="Footer" className="footer-image" />
    </footer>
  );
};

export default Footer;
