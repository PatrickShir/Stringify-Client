import React from 'react';
import HeroSection from "./HeroSection";
import {homeObjOne, homeObjThree, homeObjTwo} from "./Data";

/**
 * Landing page which loads hero section components with settings.
 * @returns {*}
 * @constructor
 */
const LandingPage = () => {
    return (
        <div>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
        </div>
    );
};

export default LandingPage;
