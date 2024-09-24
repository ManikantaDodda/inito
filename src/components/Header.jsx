import React, { useState } from 'react';
import logo from "../assets/logo.svg";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  // Toggle mobile navigation state
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="fixed">
      <div className="header__con">
        {/* Hamburger Menu */}
        <div className="ham-menu" id="mobile-ham-menu">
          <div className={`line-con ${mobileNav ? 'close' : ''}`} onClick={toggleMobileNav}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img alt="Logo" src={logo} />
          </a>
        </div>

        {/* Sidebar for Mobile */}
        <div className={`sidebar ${mobileNav ? 'active' : ''}`} id="mobile-sidebar">
          <div>
            <a className="font-semi-bold text-dtheme" href="/about-us">About Us</a>
            <a className="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
            <a className="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
            <a className="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
            <a className="font-semi-bold text-dtheme" href="/careers">Careers</a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a className="font-semi-bold text-dtheme" href="/about-us">About Us</a>
          <a className="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
          <a className="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
          <a className="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
          <a className="font-semi-bold text-dtheme" href="/careers">Careers</a>
          <a className="button" id="order-now-menu" href="/buy-now">Try Inito</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
