import React from 'react';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Hi, I'm Samuel, a Software Developer.</h1>
                <p className="paragraph">And this is my portfolio.</p>
                <button className="email-button"><img src="/svg/mail.svg" alt="mail" />samuelmercado7b@gmail.com</button>
            </div>
            <span className="photo-samuel"></span>
        </section>
    );
}

export {Hero};
