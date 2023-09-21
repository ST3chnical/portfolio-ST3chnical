import React from "react";
import '../styles/footer.css';

const socialMediaIcons = {
    github: "/svg/github.svg",
    whatsapp: "/svg/whatsapp.svg",
    instagram: "/svg/instagram.svg",
    linkedin: "/svg/linkedin.svg",
};

const socialMediaLinks = {
    github: "https://github.com/ST3chnical",
    whatsapp: "https://wa.me/+57",
    instagram: "https://www.instagram.com/sammerk2_/",
    linkedin: "https://www.linkedin.com/in/samuel-mercado-948727270",
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
                            <a href={socialMediaLinks[key]} target="_blank" rel="noopener noreferrer">
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

