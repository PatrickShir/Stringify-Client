import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './component/page/home/LandingPage';
import ChatPage from './component/page/chat/MeetingPage';
import ErrorPage from './component/page/error/ErrorPage';
import Navbar from "./component/Navbar";
import './App.css';
import InformationPage from "./component/page/information/InformationPage";
import ContactPage from "./component/page/contact/ContactPage";
import ProfilePage from "./component/page/profile/ProfilePage";
import ConnectPage from "./component/page/connection/ConnectPage";
import Footer from "./component/Footer";
import {connect} from 'react-redux';
import {pingServer} from "./api/endpoints/endpoints";

/**
 * Main application component.
 */
const App = ({isChatActive}) => {

    useEffect(() => {
        pingServer()
            .then(response => console.log(response))
            .catch(error => console.log(error));
    },[]);

    return (
        <div>
            <Router >
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/meeting" component={ChatPage} />
                    <Route exact path="/information" component={InformationPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/connect" component={ConnectPage} />
                    <Route path="/*" component={ErrorPage} />
                </Switch>
                {
                    isChatActive === 'FALSE' ? <Footer/> : null
                }
            </Router>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = (state) => {
    return {
        isChatActive: state.isChatActive
    };
}

export default connect(mapStateToProps)(App);
