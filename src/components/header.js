import React, { useState } from "react";
import '../styles/header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className='navbar-left'>
                <span className='logo'><img src="/svg/logo.svg" alt="logo"/></span>
            </nav>
            <nav className='navbar-right'>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <img src="/svg/menu-dots.svg" alt="Menu Icon" />
                </div>
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about-me" onClick={closeMenu}>About me</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
