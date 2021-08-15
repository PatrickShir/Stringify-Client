import React from 'react';
import notFound from '../../../images/404.gif';
import './ErrorPage.css'

/**
 * Error page component.
 * @returns {*}
 * @constructor
 */
const ErrorPage = () => {
    return (
        <div className="container-error">
            <div className="content">
                <h1 className="header-error">404</h1>
                <h3>Oops, looks like you've gotten an error.</h3>
                <p> The requested URL was not found on this server.</p>
            </div>
            <img className="img-error" src={notFound} alt="404"/>
        </div>
    );
};

export default ErrorPage;
