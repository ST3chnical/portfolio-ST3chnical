import React from "react";
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <nav className='navbar-left'>
                <span className='logo'><img src="/" alt="logo"/></span>
            </nav>
            <nav className='navbar-right'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export {Header};