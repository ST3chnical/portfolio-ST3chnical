import React from 'react';
import '../styles/hero.css';

const Hero = () => {
    const email = 'samuelmercado7b@gmail.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Hi, I'm Samuel, a Software Developer.</h1>
                <p className="paragraph">And this is my portfolio.</p>
                <button className="email-button" onClick={handleEmailClick}>
                    <img src="/svg/mail.svg" alt="mail" />
                    {email}
                </button>
            </div>
            <span className="photo-samuel"></span>
        </section>
    );
}

export { Hero };
