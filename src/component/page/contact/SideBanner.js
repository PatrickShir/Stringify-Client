import React from 'react';
import './ContactPage.css';
import email from '../../../images/letter-icon.png';

/**
 * The side banner.
 * @returns {*}
 * @constructor
 */
const SideBanner = () => {
    return (
        <div className="side-container">
            <div className="content-side">
                <div>
                    <h1>Contact us</h1>
                    <br/>
                    <p>
                        If you have any questions or want to get in touch with us,
                        then please use this form.
                    </p>
                    <br/>
                    <p>We look forward to hearing from you!</p>
                </div>
                <img id="email-icon" src={email} alt="email"/>
            </div>
        </div>
    );
};

export default SideBanner;
