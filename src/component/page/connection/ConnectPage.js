import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';

import './ConnectPage.css';
import Loading from "./Loading";
import {setConnectionStatus, setMeetingSession, setProfile} from "../../../actions";
import {createNewMeeting, findMeetingByKey, findMeetingByChatId} from "../../../api/endpoints/endpoints";
import Success from "./Success";
import Error from "./Error";

/**
 * Gets Chat Id from the browsers URL bar.
 * @returns {string|null}
 */
const getChatId = () => {
    let url = window.location.href;

    if (url.includes("?chat-id=")) {
        return url.substring(url.indexOf("=") + 1, url.length);
    } else
        return null;
};

/**
 * Connect page component which handles different actions depending on connection status.
 * @param props
 * @returns {*}
 * @constructor
 */
const ConnectPage = props => {

    const [content, setContent] = useState(
        {
            display: 'loading',
            message: props.connectionStatus === "CREATE_MEETING" ? "Creating a meeting" : "Connecting to the meeting"
        });

    const dangerousOnMount = useRef(() => {
        if (props.connectionStatus === null && !props.profile && !getChatId()) {
            props.history.push("/error");
        } else if (props.connectionStatus === "CREATE_MEETING") {
            createNewMeeting(props.profile)
                .then(response => {
                    props.setProfile(response.data.profile);
                    props.setMeeting(response.data.chatSession);
                    setContent({display: "success", message: "Initializing a new meeting..."});
                })
                .catch(error => setContent({display: "failure", message: error.response.data.message}));

        } else if (props.connectionStatus === "FIND_MEETING") {
            findMeetingByKey(props.keyMeeting)
                .then(response => {
                    props.setMeeting(response.data);
                    setContent({display: "success", message: "Meeting found. Preparing to establish connection to meeting..."});
                })
                .catch(error =>  setContent({display: "failure", message: error.response.data.message}));
        } else {
            findMeetingByChatId(getChatId())
                .then(response => {
                    props.setMeeting(response.data);
                    props.setConnectionStatus("FIND_MEETING");
                    setContent({display: "success", message: "Meeting found. Preparing to establish connection to meeting..."});
                })
                .catch(error =>  setContent({display: "failure", message: error.response.data.message}));
        }
    });



    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    /**
     * Displays different components depending on outcome of response of an api call.
     * @returns {*}
     */
    const displayContent = () => {
        if (content.display === "failure")
            return <Error message={content.message}/>
        else if (content.display === "success")
            return <Success connectionStatus={props.connectionStatus} history={props.history} message={content.message}/>
        else
            return <Loading message={content.message}/>
    };

    return (
        <div className="container-connect">
            {displayContent()}
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = state => {
    return {
        connectionStatus: state.connectionStatus,
        profile: state.profile,
        keyMeeting: state.keyMeeting
    };
};

/**
 * A method that allows redux actions to be dispatched.
 */
const mapDispatchToProps = dispatch => {
    return {
        setConnectionStatus: e => dispatch(setConnectionStatus(e)),
        setMeeting: e => dispatch(setMeetingSession(e)),
        setProfile: e => dispatch(setProfile(e))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPage);
