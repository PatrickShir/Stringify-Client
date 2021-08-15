import React, {useEffect, useRef} from 'react';

import Message from "./Message";
import './scrollbar.css';
import {connect} from 'react-redux';

/**
 * A chat window component to display messages.
 * @param messages
 * @param theme
 * @returns {*}
 * @constructor
 */
const ChatWindow = ({messages, theme}) => {

    const bottom = useRef();

    /**
     * Scrolls to bottom.
     */
    const scrollToBottom = () => {
        bottom.current.scrollIntoView({block: "end", inline: "end"});
    };

    useEffect(() => {
        scrollToBottom();

    }, [messages])

    /**
     * Renders all the messages.
     */
    const renderMessages = messages.map(message => {
        return <Message key={message.guid} message={message} theme={theme}/>
    });

    return (
        <div className={`chat-window ${theme}`}>
            {renderMessages}
            <div ref={bottom}/>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps)(ChatWindow);
