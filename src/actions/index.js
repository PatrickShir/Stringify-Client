// Action creator

// named export
/**
 * A method that sets a theme (options between Dark/Light).
 * @param theme
 * @returns {{payload: *, type: string}}
 */
export const selectTheme = theme => {
    return {
        type: 'THEME_SELECT',
        payload: theme
    };
};

/**
 * A method that checks if a client is in an active meeting or not.
 * @param isActive
 * @returns {{payload: *, type: string}}
 */
export const setChatActive = isActive => {
    return {
        type: 'CHAT_ACTIVE',
        payload: isActive
    };
};

/**
 * A method that stores a created profile.
 * @param profile
 * @returns {{payload: *, type: string}}
 */
export const setProfile = profile => {
    return {
        type: 'PROFILE_INFO',
        payload: profile
    };
};

/**
 * A method that sets the connection status (options between CREATE_MEETING and FIND_MEETING).
 * @param connectionStatus
 * @returns {{payload: *, type: string}}
 */
export const setConnectionStatus = connectionStatus => {
    return {
        type: 'CONNECTION_STATUS',
        payload: connectionStatus
    };
};

/**
 * A method that sets the key for finding a meeting.
 * @param key
 * @returns {{payload: *, type: string}}
 */
export const setKeyMeeting = key => {
    return {
        type: 'KEY',
        payload: key
    };
};

/**
 * A method that sets the active session for a created meeting.
 * @param meetingSession
 * @returns {{payload: *, type: string}}
 */
export const setMeetingSession = meetingSession => {
    return {
        type: 'CONNECTION_INFO',
        payload: meetingSession
    };
};

/**
 * A method that stores a new message.
 * @param message
 * @returns {{payload: *, type: string}}
 */
export const addNewMessage = message => {
    return {
        type: 'NEW_MESSAGE',
        payload: message
    };
};

/**
 * A method that adds a connected profile.
 * @param profile
 * @returns {{payload: *, type: string}}
 */
export const addProfileConnected = profile => {
    return {
        type: 'PROFILE_CONNECT',
        payload: profile
    };
};

/**
 * A method that removes a disconnected profile.
 * @param profile
 * @returns {{payload: *, type: string}}
 */
export const removeProfileDisconnected = profile => {
    return {
        type: 'PROFILE_DISCONNECT',
        payload: profile
    };
};
