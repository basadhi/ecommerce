import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

const imagestyle = {
    width: '100%', // Set the width to 100% to make the images responsive
    maxHeight: '400px', // Set a maximum height if needed
    objectFit: 'cover',
};

const items = MainCaroselData.map((item) => <img className="cursor-pointer" role='presentation'
src={item.image} alt="here lamp imgae"></img>)

const MainCarosel = () => (
    <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        items={items}
        style={imagestyle}
        controlsStrategy="alternate"
    />
);


export default MainCarosel;
