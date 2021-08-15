import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';

import ChatWindow from "./ChatWindow";
import './MeetingPage.css';
import './theme.css';
import {
    addNewMessage,
    setChatActive,
    setConnectionStatus,
    setKeyMeeting,
    setMeetingSession,
    setProfile,
    addProfileConnected
} from "../../../actions";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";
import {getMessageHistory, getConnectedProfiles} from "../../../api/endpoints/endpoints";


const MeetingPage = (
    {
        setConnectionStatus,
        meetingSession,
        setMeeting,
        profile,
        setProfile,
        setKey,
        theme,
        setChatActive,
        history,
        addNewToMessages,
        addProfileConnected,
        connectionStatus
    }) => {

    const dangerousOnMount = useRef(() => {
        if (meetingSession) {
            getMessageHistory(meetingSession.guid, 0)
                .then(response => {
                    response.data.forEach(message => {
                        addNewToMessages(message);
                    });
                })
                .catch(error => console.log(error));

            if (connectionStatus !== "CREATE_MEETING")
                getConnectedProfiles(meetingSession.guid)
                    .then(response => {
                        response.data.forEach(profile => {
                            addProfileConnected(profile);
                        });
                    })
                    .catch(error => console.log(error));
        }
    });

    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    useEffect(() => {
        // when component mounts
        if (!profile || !meetingSession) {
            history.push('/error');
        }

        setChatActive('TRUE');

        //when component unmounts
        return () => {
            setChatActive('FALSE');
            setConnectionStatus(null);
            setKey("");
            setMeeting(null);
            setProfile(null);
        }

    }, [setChatActive, history, setMeeting, setKey, setProfile, meetingSession, profile, setConnectionStatus]);

    return (
        <div className="container-chat">
            <ChatWindow theme={theme}/>
            {
                meetingSession ?
                    <ChatBox profile={profile} meetingSession={meetingSession} theme={theme}/>
                    : null
            }

            <ContactList device="desktop" theme={theme}/>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = (state) => {
    return {
        theme: state.selectedTheme,
        profile: state.profile,
        meetingSession: state.meetingSession,
        connectionStatus: state.connectionStatus
    };
};

/**
 * A method that allows redux actions to be dispatched.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        setChatActive: e => dispatch(setChatActive(e)),
        setProfile: e => dispatch(setProfile(e)),
        setConnectionStatus: e => dispatch(setConnectionStatus(e)),
        setMeeting: e => dispatch(setMeetingSession(e)),
        setKey: e => dispatch(setKeyMeeting(e)),
        addNewToMessages: e => dispatch(addNewMessage(e)),
        addProfileConnected: e => dispatch(addProfileConnected(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage);
