import React from 'react';
import {IconContext} from "react-icons";
import {IoCloseSharp} from "react-icons/io5";

const Error = ({message}) => {

    return (
        <div className="status-wrapper">
            <IconContext.Provider value={{color: '#bf3232'}}>
                <div className="fail-mark">
                    <IoCloseSharp/>
                </div>
            </IconContext.Provider>
            <h2 className="connection-feed">
                ERROR: {message}
                <br/>
                <br/>
                Please try again or start a new meeting.
            </h2>
        </div>
    );
};

export default Error;
