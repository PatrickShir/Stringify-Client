import React from 'react';

/**
 * Contact details component which renders profile name and avatar.
 * @param contact
 * @param theme
 * @returns {*}
 * @constructor
 */
const ContactDetail = ({contact, theme}) => {


    return (
        <div className={`contact-detail-wrapper ${theme}`}>
            <img src={require(`../../../images/avatars/${contact.avatar}.png`).default} alt="avatar"/>
            <div className="contact-name">{contact.name}</div>
        </div>
    );
};

export default ContactDetail;
