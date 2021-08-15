import React from 'react';
import './ContactPage.css';

/**
 * Contact form component.
 * @returns {*}
 * @constructor
 */
const ContactForm = () => {
    return (
        <div className="contact-form">
            <form>
                <div className="upper">
                    <input className="contact-name" minLength={3} maxLength={30} required type="text" placeholder="Name"/>
                    <input required type="email" placeholder="Email"/>
                </div>
                <input maxLength={50} required type="subject" placeholder="subject"/>
                <textarea minLength={10} required placeholder="Your message here..." />
                <button className="submit-btn" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
