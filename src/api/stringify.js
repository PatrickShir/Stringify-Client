import axios from 'axios';

/**
 * Sets the default baseURL using Axios to simplify future api calls to the server.
 */
export default axios.create({
    baseURL:'https://stringify-chat.herokuapp.com/'
});
