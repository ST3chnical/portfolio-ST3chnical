import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    const email = 'samuelmercado7b@gmail.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section className="Contact-section">
            <div className="category-title">
                <span></span>
                <h2 id="contact">Contact Me</h2>
            </div>
            <div className="contact-info">
                <p className="paragraph">Do you have any questions or want to work together?</p>
                <button className="email-button" onClick={handleEmailClick}>
                    <img src="/svg/mail.svg" alt="mail" />
                    {email}
                </button>
            </div>
        </section>
    );
}

export { Contact };
