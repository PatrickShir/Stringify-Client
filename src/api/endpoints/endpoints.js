import stringify from "../stringify";

/**
 * A method that creates a new meeting.
 * @param profile
 * @returns {Promise<*>}
 */
export const createNewMeeting = async profile => {

    return await stringify.post("api/meetings/new-meeting", profile);
};

/**
 * A method that finds a new meeting by key.
 * @param key
 * @returns {Promise<*>}
 */
export const findMeetingByKey = async key => {
    return await stringify.get("api/meetings/find-meeting?key=" + key);
}

/**
 * A method that finds a meeting by chat id.
 * @param chatId
 * @returns {Promise<*>}
 */
export const findMeetingByChatId = async chatId => {
    return await stringify.get("api/meetings/find-meeting?chat-id=" + chatId);
}

/**
 * A method that gets the latest ten message history of a chat session.
 * @param chatId
 * @param page
 * @returns {Promise<*>}
 */
export const getMessageHistory = async (chatId, page) => {
    return await stringify.get(`api/messages/history?chat-id=${chatId}&page=${page}`);
}

/**
 * A method that gets the connected profiles of a chat session.
 * @param chatId
 * @returns {Promise<*>}
 */
export const getConnectedProfiles = async (chatId) => {
    return await stringify.get("api/meetings/profiles-connected?chat-id=" + chatId);
}

/**
 * A method that invites a peer by email.
 * @param email
 * @param name
 * @param chatId
 * @returns {Promise<*>}
 */
export const inviteByMail = async (email, name , chatId) => {
    return await stringify.post(`api/meetings/invite/${email}/by/${name}?chat-id=${chatId}`)
}

/**
 * A method that pings the server when it is idle.
 * @returns {Promise<*>}
 */
export const pingServer = async () => {
    return await stringify.get("api/ping");
}
