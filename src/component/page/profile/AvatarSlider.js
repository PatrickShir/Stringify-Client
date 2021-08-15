import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";

import './AvatarSlider.css';
import {images} from "./AvatarData";

/**
 * Renders avatar options.
 */
const AvatarSlider = ({setAvatar}) => {

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        setAvatar("avatar" + (imageIndex + 1));
    }, [imageIndex, setAvatar]);

    const renderImages = images.map((img, idx) => {

        let previous = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
        let next = imageIndex === images.length - 1 ? 0 : imageIndex + 1;

        if (idx === imageIndex) {
            return (
                <div key={idx} className={idx === imageIndex ? "slide slide-active" : "slide"}>
                    <img src={img} alt={img}/>
                </div>
            );
        } else if (idx === previous || idx === next) {
            return (
                <div key={idx} className="slide slide-adjacent" >
                    <img src={img} alt={img}/>
                </div>
            );
        } else {
            return (
                <div key={idx} className="slide">
                    <img src={img} alt={img}/>
                </div>
            );
        }

    });

    const settings = {
        infinite: true,
        lazyLoad: false,
        focusOnSelect: true,
        draggable: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }
    return (
        <div >
            <Slider {...settings}>
                {renderImages}
            </Slider>
        </div>
    );
};

export default AvatarSlider;
