import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import gsap from 'gsap';

const ProjectSlider = ({ images }) => {
    const [midImage, setMidImage] = useState(0);
    const [rightImage, setRightImage] = useState(1);
    const [leftImage, setLeftImage] = useState(images.length - 1);

    useEffect(() => {
        if (midImage === 0) {
            setLeftImage(images.length - 1);
            setRightImage(1);
        } else if (midImage === images.length - 1) {
            setRightImage(0);
            setLeftImage(midImage - 1);
        } else {
            setRightImage(midImage + 1);
            setLeftImage(midImage - 1);
        }
    }, [midImage, images.length]);

    const animate = (dir) => {
        const dirX = dir === 'right' ? -200 : 200; // <-- flipped

        gsap.fromTo('.middleImage', { x: dirX, opacity: 0, scale: 0.6 }, { x: 0, opacity: 1, scale: 1, duration: 0.5 });

    };

    const handleNext = () => {
        setMidImage((prev) => (prev + 1) % images.length);
        animate('right');
    };

    const handlePrev = () => {
        setMidImage((prev) => (prev - 1 + images.length) % images.length);
        animate('left');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000); // every 1 second

        return () => clearInterval(interval); // cleanup on unmount
        // eslint-disable-next-line 
    }, [midImage]);

    return (
        <div className="ImageSlider">
            <div className="ImageSliderContainter">
                <div className="Images">
                    <img src={images[rightImage]} className="rightImage" alt="Right" />
                    <img src={images[midImage]} className="middleImage" alt="Center" />
                    <img src={images[leftImage]} className="leftImage" alt="Left" />
                </div>
            </div>
            <div className="buttons">
                <button className="leftButton" onClick={handlePrev}><IoIosArrowBack /></button>
                <button className="rightButton" onClick={handleNext}><IoIosArrowBack /></button>

            </div>
            <div className="dotsPlace">
                {images.map((_, index) => (
                    <div key={index} className={`dots ${index === midImage ? 'active' : 'passive'}`} />
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
