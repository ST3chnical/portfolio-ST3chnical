import React from "react";
import '../styles/header.css';

const socialMediaIcons = {
    github: "/svg/github.svg",
    whatsapp: "/svg/whatsapp.svg",
    instagram: "/svg/instagram.svg",
    linkedin: "/svg/linkedin.svg",
};

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <span>Made by Samuel - Copyright 2023</span>
            </div>
            <div>
                <ul className="social-media">
                    {Object.keys(socialMediaIcons).map((key) => (
                        <li key={key}>
                            <a href="/">
                                <img src={socialMediaIcons[key]} alt={key} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export {Footer};
