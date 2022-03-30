// import { useState } from "react";

// const Slider = () => {

//     const [container, setContainer] = useState([])


//     fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
//             'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7'
//         }
//     })
//         .then(response => response.json())
//         .then(data => setContainer(data))
//         .catch(err => console.error(err))

//     return (
//         <>
//             {container.map((items) => (
//                 <div className="slider-map" key={items.id}>
//                     <h1>{items}</h1>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default Slider;


import React, { useEffect, useState } from "react";
import { SliderData } from "./Slider-data";
import './Slider.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderLength = SliderData.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
    }

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    return (
        <div className='slider'>
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
            <div className='wrapper'>
                {SliderData.map((item, index) => {
                    return (
                        <div className={index === currentSlide ? 'slide current' : 'slide'} key={index} bg={item.bg}>
                            {index === currentSlide && (
                                <div className='container'>
                                    <div className='img-container'>
                                        <img src={item.image} alt='Dress' />
                                    </div>
                                    <div className='info-container'>
                                        <h2>{item.heading}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;