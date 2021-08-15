import React from 'react';
import './ContactPage.css';
import SideBanner from "./SideBanner";
import ContactForm from "./ContactForm";

/**
 * The contact page which renders the contact form and side banner.
 * @returns {*}
 * @constructor
 */
const ContactPage = () => {
    return (
        <div className="container-contact">
            <div className="card-contact">
                <SideBanner />
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
