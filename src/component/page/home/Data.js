import chatIcon from '../../../images/chat-icon.png';
import information from '../../../images/information.png';
import contact from '../../../images/contact.png';

/**
 * Returns settings for a hero section.
 */
export const homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Easy to use',
    headline: 'An Online Meeting Ground',
    description:
        'Start a meeting and invite your peers without any accounts or other requirements. ' +
        'Quickly get access to a group chat and send out invites, or just join an ongoing meeting.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: chatIcon,
    link: "/profile",
    alt: 'ChatBox-bubble'
};

/**
 * Returns settings for a hero section.
 */
export const homeObjTwo = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Questions & Answers',
    headline: 'Find Answers To Your Questions',
    description:
        'If you are wondering more about the web application or have any general questions, ' +
        'click the button below for all in-depth answers.',
    buttonLabel: 'More Info',
    imgStart: 'start',
    img: information,
    link: "/information",
    alt: 'ChatBox-bubble'
};

/**
 * Returns settings for a hero section.
 */
export const homeObjThree = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contact Us',
    headline: 'Get In Touch With Us',
    description:
        'We are two developers who worked on this web application as a hobby project using our technical skills in backend and frontend development. ' +
        'If you are interested in contacting us then you can do so here.',
    buttonLabel: 'Contact Us',
    imgStart: '',
    img: contact,
    link: "/contact",
    alt: 'ChatBox-bubble'
};
