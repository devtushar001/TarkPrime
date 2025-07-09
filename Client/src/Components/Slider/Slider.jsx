import React from "react";
import './Slider.css';
import { assets } from "../../assets/assets";

const Slider = () => {
    const slideImg = [
        assets.sliderOne,
        assets.sliderTwo,
        assets.sliderThree,
        assets.sliderFour,
        assets.sliderFive,
    ];

    return (
        <div className="slider-container">
            <div className="slider">
                {slideImg.map((_, index) => (
                    <input
                        key={index}
                        type="radio"
                        name="slide"
                        id={`slide${index + 1}`}
                        defaultChecked={index === 0}
                    />
                ))}

                <div className="slides">
                    {slideImg.map((image, index) => (
                        <div className="slide" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="navigation">
                    {slideImg.map((_, index) => (
                        <label key={index} htmlFor={`slide${index + 1}`}></label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
