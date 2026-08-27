import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
       <>
       <footer className="bg-[#FC8019] text-white pt-10 pb-6 px-6 sm:px-12">
  <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-6 text-center sm:text-left">
    <h2 className="text-2xl font-bold flex items-center gap-2">FitMe</h2>

    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      <a href="#">About us</a>
      <a href="#">Delivery</a>
      <a href="#">Help & Support</a>
      <a href="#">T&C</a>
    </div>

    <p className="text-sm">contact: +91 1234567899</p>
  </div>

  <div className="flex justify-center gap-4 mt-8">
    <FaFacebookF size={14} />
    <FaInstagram size={14} />
    <FaTwitter size={14} />
  </div>
</footer>
       </>
    );
}

export default Footer;