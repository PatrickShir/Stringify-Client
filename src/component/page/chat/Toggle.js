import React from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';
import {connect} from 'react-redux';
import {selectTheme} from "../../../actions";

import './Toggle.css';

/**
 * Toggles the theme.
 * @param theme
 * @param selectTheme
 * @returns {*}
 * @constructor
 */
const Toggle = ({theme, selectTheme}) => {

    /**
     * Toggle between light and dark theme.
     */
    const onThemeChange = () => {
        if (theme === "light")
            selectTheme("dark")
        else
            selectTheme("light")
    }

    return (
        <div>
            <input onChange={onThemeChange} id="checkbox" className="checkbox" type="checkbox"/>
            <label className="switch-label" htmlFor="checkbox">
                <FaMoon className="fas fa-moon"/>
                <FaSun className="fas fa-sun"/>
                <div className="circle"/>
            </label>
        </div>
    );
};

/**
 * Maps the current redux states to props.
 */
const mapStateToProps = state => {
    return {theme: state.selectedTheme};
};

/**
 * A method that allows redux actions to be dispatched.
 */
const mapDispatchToProps = dispatch => {
    return {selectTheme: e => dispatch(selectTheme(e))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
