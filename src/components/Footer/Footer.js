import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <nav class="footer">
      <div className="items">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaDiscord />
        <FaWhatsapp />
      </div>

      <p>Copyright (c) 2021 Nintendo. Os jogos são propriedade de seus respectivos donos</p>
    </nav>
  );
}

export default Footer;
