import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import AvatarSlider from "./AvatarSlider";
import '../home/HeroSection.css';
import './ProfilePage.css'
import './NameField.css';
import {setConnectionStatus, setProfile} from "../../../actions";

/**
 * Profile page component.
 * @param setProfile
 * @param connectionStatus
 * @param setConnectionStatus
 * @param history
 * @returns {*}
 * @constructor
 */
const ProfilePage = ({setProfile, connectionStatus, setConnectionStatus, history}) => {

    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (connectionStatus === null) setConnectionStatus("CREATE_MEETING");
    }, [connectionStatus, setConnectionStatus]);

    /**
     * Creates a profile.
     */
    const createProfile = e => {
        e.preventDefault();
        const guid = uuidv4();
        const tempProfile = {name, avatar, guid: guid};
        setProfile(tempProfile);
        setName("");
        if (connectionStatus === "CREATE_MEETING") history.push('/connect');
        if (connectionStatus === "FIND_MEETING") history.push('/meeting');
    };

    return (
        <div className="container-profile">
            <div style={{textAlign: "left"}} className="top-line">Almost there!</div>
            <h1>Create Your Profile</h1>
            <p>
                Please enter your name to connect to the chat session. You can also <span style={{color: "#f00946"}}>
                <b>pick an avatar</b></span> to your liking!
            </p>
            <AvatarSlider setAvatar={setAvatar}/>
            {/*<NameField/>*/}
            <form className="profile-form">
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    className="name-field"
                    minLength={3}
                    maxLength={30}
                    required type="text"
                    placeholder="Your Name"
                />
                <button disabled={!name} className="submit-btn" type="submit" onClick={createProfile}>Connect</button>
            </form>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = state => {
    return {
        connectionStatus: state.connectionStatus
    };
};

/**
 * A method that allows redux actions to be dispatched.
 */
const mapDispatchToProps = dispatch => {
    return {
        setProfile: e => dispatch(setProfile(e)),
        setConnectionStatus: e => dispatch(setConnectionStatus(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
