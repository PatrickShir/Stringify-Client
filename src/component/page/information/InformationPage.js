import React from 'react';
import QaComponent from "./QAComponent";
import './InformationPage.css';
import {questionFive, questionFour, questionOne, questionSix, questionThree, questionTwo} from "./Data";

/**
 * Information page component which loads QA Components.
 * @returns {*}
 * @constructor
 */
const InformationPage = () => {
    return (
        <div className="container-info">
            <div className="column-info">
                <div className="title-info">
                    <h1>Information</h1>
                    <h3>
                        We are two developers from Sweden who love programming and who have been working on this as a hobby project.
                        In order to deliver the best results, we always strive towards perfection with our products.
                        <br/><br/>
                        Stringify was created using Spring Boot and Websocket for live communication while our frontend is made with React in order to facilitate a responsive single page application.
                    </h3>
                    <h1>Questions & Answers</h1>
                </div>
                <QaComponent {...questionOne} />
                <QaComponent {...questionTwo} />
                <QaComponent {...questionThree} />
                <QaComponent {...questionFour} />
                <QaComponent {...questionFive} />
                <QaComponent {...questionSix} />
            </div>
        </div>
    );
};

export default InformationPage;
