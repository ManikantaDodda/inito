import React from 'react';
import logo from "../assets/logo.svg";

function Header() {
    return (
        <header class="fixed">
            <div class="header__con">
                <div class="ham-menu" id="mobile-ham-menu">
                    <div class="line-con">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
                <div class="logo">
                    <a href="/">
                        <img alt="Inito Logo" src={logo} />
                    </a>    </div>
                <nav>
                    <a class="font-semi-bold text-dtheme" href="/about-us">About Us</a>
                    <a class="font-semi-bold text-dtheme" href="https://blog.inito.com">Blog</a>
                    <a class="font-semi-bold text-dtheme" href="/faqs">FAQ</a>
                    <a class="font-semi-bold text-dtheme" href="/contact-us">Contact Us</a>
                    <a class="font-semi-bold text-dtheme" href="/careers">Careers</a>


                    <a class="button" id="order-now-menu" href="/buy-now">Try Inito</a>

                </nav>
            </div>
        </header>
    );
}

export default Header;