import React from 'react';
import ContactDetail from "./ContactDetail";
import {connect} from 'react-redux';

/**
 * Takes in a contact detail and also renders a list of all connected profiles.
 * @param device
 * @param profilesConnected
 * @param theme
 * @returns {*}
 * @constructor
 */
const ContactList = ({device, profile, profilesConnected, theme}) => {

        const renderContacts = profilesConnected.map(contact => {
            return <ContactDetail key={contact.guid} theme={theme} contact={{name: contact.name, avatar: contact.avatar}}/>;
        });

    return (
        <div className={`contact-list ${device} ${theme}`}>
            <div>
                <div className="contact-header">IN MEETING</div>
                {renderContacts}
            </div>
            <div className="connected-as-container" >
                <div className="contact-header">CONNECTED AS</div>
                <ContactDetail theme={theme} contact={profile} />
            </div>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = state => {
    return {
        profilesConnected: state.profilesConnected,
        profile: state.profile
    };
};

export default connect(mapStateToProps)(ContactList);
