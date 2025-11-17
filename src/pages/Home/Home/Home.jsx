import React from 'react';
import Banner from '../Banner/Banner';
import HowToWork from '../../../Components/HowToWork';
import OurServices from '../../../Components/OurServices';
import SalesTeam from '../../../Components/SalesTeam';
import Reviews from '../../../Components/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWork></HowToWork>
            <OurServices></OurServices>
            <SalesTeam></SalesTeam>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;