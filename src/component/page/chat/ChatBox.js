import React, {useEffect, useRef, useState} from 'react';
import {IoSend, IoSettings} from 'react-icons/io5'
import {IconContext} from "react-icons";
import Settings from "./Settings";
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {connect} from 'react-redux';

import {addNewMessage, addProfileConnected, removeProfileDisconnected, setProfile} from "../../../actions";

const wsSourceUrl = "https://stringify-chat.herokuapp.com/stringify-chat";
let stompClient = null;


/**
 * A chatbox component where you can send and receive messages, also handles the websocket/stomp connections.
 * @param meetingSession
 * @param profile
 * @param theme
 * @param addNewToMessages
 * @param addProfileConnected
 * @param removeProfileDisconnected
 * @returns {*}
 * @constructor
 */
const ChatBox = ({
                     meetingSession,
                     profile,
                     theme,
                     addNewToMessages,
                     addProfileConnected,
                     removeProfileDisconnected,
                     setProfile
                 }) => {
    const [message, setMessage] = useState("");
    const [click, setClick] = useState(false);

    /**
     * A method that executes when a profile connects.
     * This method is invoked when a server publishes a new connected profile.
     * @param frame
     */
    const onProfileConnects = frame => {
        const connectionNotice = JSON.parse(frame.body);

        const message = {
            avatar: connectionNotice.connectionMessage.avatar,
            from: connectionNotice.connectionMessage.from,
            date: connectionNotice.connectionMessage.date,
            content: connectionNotice.connectionMessage.content
        }

        addNewToMessages(message);

        console.log(connectionNotice.profile)
        if (profile.guid !== connectionNotice.profile.guid)
            addProfileConnected(connectionNotice.profile);
    };

    /**
     * A new message is added to redux state.
     * This method is invoked when a new message is published by the server.
     * @param frame
     */
    const onMessageReceived = frame => {
        const message = JSON.parse(frame.body);
        addNewToMessages(message);
    };

    /**
     * A method that runs when a profile disconnects.
     * This method is invoked when a client disconnects from the server.
     * @param frame
     */
    const onProfileDisconnects = frame => {
        const connectionNotice = JSON.parse(frame.body);
        const message = {
            avatar: connectionNotice.connectionMessage.avatar,
            from: connectionNotice.connectionMessage.from,
            date: connectionNotice.connectionMessage.date,
            content: connectionNotice.connectionMessage.content
        }
        addNewToMessages(message);
        removeProfileDisconnected(connectionNotice.profile);
    };

    /**
     * A method that sends a connection notice to the server.
     * @param profile
     */
    const sendConnectNotice = profile => {
        stompClient.send(`/app/connect/${meetingSession.guid}`, {}, JSON.stringify(profile));
    };

    /**
     * A method that sends a new message to the server.
     * @param message
     */
    const sendNewMessage = message => {
        stompClient.send(`/app/send/meeting/${meetingSession.guid}`, {}, JSON.stringify(message));
    };

    const dangerousOnMount = useRef(() => {
        stompClient = Stomp.over(() => {
            return new SockJS(wsSourceUrl)
        });
        stompClient.debug = () => {
        };
        stompClient.connect({}, () => {
            stompClient.subscribe(`/queue/connect/${meetingSession.guid}`, onProfileConnects);
            stompClient.subscribe(`/queue/meeting/${meetingSession.guid}`, onMessageReceived);
            stompClient.subscribe(`/queue/disconnect/${meetingSession.guid}`, onProfileDisconnects);
            sendConnectNotice(profile);
        });


    });

    useEffect(() => {
        dangerousOnMount.current();
    }, []);

    useEffect(() => {
        const sendDisconnectNotice = profile => {
            stompClient.send(`/app/disconnect/${meetingSession.guid}`, {}, JSON.stringify(profile));
        };

        window.onbeforeunload = () => {
            sendDisconnectNotice(profile);
        }
        return () => {
            sendDisconnectNotice(profile);
            stompClient.disconnect();
        }
    }, [profile, meetingSession.guid])

    /**
     * A method that sends a message.
     */
    const sendMessage = () => {
        let msgOutput = {
            from: profile.name,
            avatar: profile.avatar,
            content: message
        };

        if (message !== "") {
            sendNewMessage(msgOutput);
        }

        setMessage("");
    }

    /**
     * A method that sends a message when pressing ENTER on the keyboard.
     * @param event
     */
    const onEnter = (event) => {

        if (event.keyCode === 13) {
            if (event.shiftKey) {
            } else {
                event.preventDefault();
                sendMessage();
            }
        }
    };

    return (
        <div className={`container-chatbox ${theme}`}>

            <Settings profile={profile} meetingSession={meetingSession} click={click} theme={theme}
                      setClick={(event) => setClick(event)}/>

            <div className="chat-area">
                <textarea
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    className={`chatbox ${theme}`}
                    onKeyDown={onEnter}
                    placeholder="Send a message..."
                />
                <div className="btn-area">
                    <div onClick={() => setClick(!click)} className="btn-settings">
                        <IconContext.Provider value={{color: theme === 'dark' ? '#f7f8fa' : '#676767'}}>
                            <IoSettings size={30}/>
                        </IconContext.Provider>
                    </div>
                    {
                        message === "" ? null :
                            (
                                <div className="send-btn" onClick={() => sendMessage()}>
                                    <IconContext.Provider value={{color: '#f7f8fa'}}>
                                        <IoSend size={20}/>
                                    </IconContext.Provider>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

/**
 * A method that allows redux actions to be dispatched.
 */
const mapDispatchToProps = dispatch => {
    return {
        addNewToMessages: e => dispatch(addNewMessage(e)),
        addProfileConnected: e => dispatch(addProfileConnected(e)),
        removeProfileDisconnected: e => dispatch(removeProfileDisconnected(e)),
        setProfile: e => dispatch(setProfile(e))
    };
};

export default connect(null, mapDispatchToProps)(ChatBox);
