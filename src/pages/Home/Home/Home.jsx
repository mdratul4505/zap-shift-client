import React from 'react';
import Banner from '../Banner/Banner';
import HowToWork from '../../../Components/HowToWork';
import OurServices from '../../../Components/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWork></HowToWork>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;