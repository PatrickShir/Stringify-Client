import {combineReducers} from "redux";

/**
 * Sets the theme if type is THEME_SELECT.
 * @param selectedTheme
 * @param action
 */
const selectThemeReducer = (selectedTheme = "dark", action) => {
    if (action.type === 'THEME_SELECT')
        return action.payload;

    return selectedTheme;
};

/**
 * Sets chat active if type is CHAT_ACTIVE.
 * @param isChatActive
 * @param action
 */
const chatActiveReducer = (isChatActive = 'FALSE', action) => {
    if (action.type === 'CHAT_ACTIVE')
        return action.payload;

    return isChatActive;
};

/**
 * Sets profile if type is PROFILE_INFO.
 * @param profile
 * @param action
 */
const profileReducer = (profile = null, action) => {
    if (action.type === 'PROFILE_INFO')
        return action.payload;

    return profile;
};

/**
 * Sets connection status if type is CONNECTION_STATUS.
 * @param connectionStatus
 * @param action
 */
const connectionStatusReducer = (connectionStatus = null, action) => {
    if (action.type === 'CONNECTION_STATUS')
        return action.payload;

    return connectionStatus;
};

/**
 * Sets key if type is KEY.
 * @param key
 * @param action
 */
const keyReducer = (key = "", action) => {
    if (action.type === 'KEY')
        return action.payload;

    return key;
};

/**
 * Sets meeting session if type is CONNECTION_INFO.
 * @param meetingSession
 * @param action
 */
const meetingSessionReducer = (meetingSession = null, action) => {
    if (action.type === 'CONNECTION_INFO')
        return action.payload;

    return meetingSession;
};

/**
 * Adds a message to the collection of messages if type is NEW_MESSAGE.
 * @param messages
 * @param action
 */
const messagesReducer = (messages = [], action) => {
    if (action.type === 'NEW_MESSAGE')
        return [...messages, action.payload];

    return messages;
};

/**
 * Adds or removes a new profile if type is either PROFILE_CONNECT or PROFILE_DISCONNECT.
 * @param profilesConnected
 * @param action
 */
const profilesConnectedReducer = (profilesConnected = [], action) => {
  if (action.type === 'PROFILE_CONNECT')
      return [...profilesConnected, action.payload];
  else if (action.type === 'PROFILE_DISCONNECT')
      return profilesConnected.filter(profile => profile.guid !== action.payload.guid);

    return profilesConnected;
};

export default combineReducers({
    selectedTheme: selectThemeReducer,
    isChatActive: chatActiveReducer,
    profile: profileReducer,
    connectionStatus: connectionStatusReducer,
    keyMeeting: keyReducer,
    meetingSession: meetingSessionReducer,
    messages: messagesReducer,
    profilesConnected: profilesConnectedReducer
});
