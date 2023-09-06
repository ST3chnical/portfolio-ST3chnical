import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section className="Contact-section">
            <div className="category-title">
                <span></span>
                <h2 id="contact">Contact Me</h2>
            </div>
            <div className="contact-info">
                <p className="paragraph">Do you have any questions or want to work together?</p>
                <button className="email-button"><img src="/svg/mail.svg" alt="mail" />
                    samuelmercado7b@gmail.com
                </button>
            </div>
        </section>
    );
}

export {Contact};
