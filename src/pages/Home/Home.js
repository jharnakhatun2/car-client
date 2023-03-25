import React from 'react';
import About from '../About/About';
import Discount from '../Discount/Discount';
import Service from '../services/Service';
import Banner from './Banner';
import ServiceIcon from './ServiceIcon';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Discount></Discount>
            <ServiceIcon></ServiceIcon>
            <About></About>
        </div>
    );
};

export default Home;