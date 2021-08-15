import React from 'react';
import './Footer.css';
import logo from '../images/stringify-logo.png';
import {Link} from "react-router-dom";

/**
 * Footer component.
 */
const Footer = () => {
    return (
        <div>
            <div className="footer-wrapper">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className="footer-content">
                    <div className="content-left">
                        <Link className="link" to="/contact">
                            <p className="title">
                                <u>Developers</u>
                            </p>
                            <p>Allan Jamil</p>
                            <p>Pedram Shirforoushan</p>
                        </Link>

                    </div>

                    <div className="content">
                        &copy; Stringify 2021
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
